import React from 'react'
import LessonTabItem from "../components/LessonTabItem";
import LessonService from "../services/LessonService";
let self

export default class LessonTabs
    extends React.Component {

    constructor(props) {
        super(props);
        self = this;
        this.state = {
            moduleId: '',
            courseId: '',
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
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }

    createLesson() {
        console.log(this.state.lesson);
        var newLesson;
        if(this.state.lesson.title === '') {
            newLesson = {title: 'New Lesson'};
        }
        else {
            newLesson = this.state.lesson;
        }
            this.lessonService
                .createLesson(this.state.courseId, this.state.moduleId, newLesson)
                .then(
                    () => {
                        this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
                    }
                );
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson:{title: event.target.value}})
    }

    deleteLesson(lessonId) {
        // console.log('delete id: '+moduleId);
        this.lessonService
            .deleteLesson(lessonId)
            .then(
            () => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
            }
        );
    }

    renderListOfLessons() {
        console.log(this.state.lessons);
        // if(this.state.lessons!=undefined) {
        //     var lessons = this.state.lessons.map((lesson) => {
        //        console.log(lesson);
        //     });
            if(this.state.lessons === null) {
                return null;
            }
            var lessons = this.state.lessons.map((lesson) => {  //map accumulates a result and returns a concatenated result
                    return <LessonTabItem
                        title={lesson.title}
                        key={lesson.id}
                        lesson={lesson}
                        delete={self.deleteLesson}
                        moduleId={this.state.moduleId}
                        courseId={this.state.courseId}/> //its important to uniquely identify each element
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
