import React from 'react'
import LessonListItem from "../components/LessonListItem";
import LessonService from "../services/LessonService";
let self

export default class LessonTabs
    extends React.Component {

    constructor(props) {
        super(props);
        self = this;
        this.state = {
            moduleId: '',
            lesson: {title: ''},
            lessons: [
                {title: 'Lesson 1', id: 321},
                {title: 'Lesson 2', id: 432},
            ]
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.setLessons = this.setLessons.bind(this);
        this.lessonService = LessonService.instance;

    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setLessonTitle(event) {
        this.setState({lesson: {
                    title: event.target.value
                }
            }
        );
    }

    findAllLessonsForModule(courseId,moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId,moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }

    componentDidMount() {
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId)
    }

    createLesson() {
        console.log(this.state.lesson);
        this.lessonService
            .createLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
            .then(
            () => {
                this.findAllModulesForCourse(this.props.courseId, this.props.moduleId);
            }
        );
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson:{title: event.target.value}})
    }

    deleteLesson(courseId, moduleId, lessonId) {
        console.log('delete id: '+moduleId);
        this.lessonService
            .deleteLesson(courseId, moduleId, lessonId).then(
            () => {
                this.findAllLessonsForModule(courseId, moduleId);
            }
        );
    }

    renderListOfLessons() {
        let lessons = this.state.lessons
            .map(function(lesson){  //map accumulates a result and returns a concatenated result
                    return <LessonListItem
                        title={lesson.title}
                        key={lesson.id}
                        lesson={lesson}
                        delete={self.deleteLesson}
                        moduleId={self.state.moduleId}/> //its important to uniquely identify each element
                }
            );
        return (
            lessons
        )
    }

    render()
    {
        return(
        <div>
            <h3>Lesson List for module: {this.state.moduleId}</h3>
            <input className="form-control"
                   onChange={this.titleChanged}
                   placeholder="New Lesson Title"/>
            <button onClick={this.createLesson}
                    className="btn btn-primary btn-block">
                <i className=
                       "fa fa-plus"></i>
            </button>
        <ul className="nav nav-tabs">
            {this.renderListOfLessons()}
        </ul>
        </div>
    );
    }
}
