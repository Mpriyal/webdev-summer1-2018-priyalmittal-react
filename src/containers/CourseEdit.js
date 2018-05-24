import React from 'react'
import ModuleList from './ModuleList'
import CourseService from '../services/CourseService'
let self;
export default class CourseEdit
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            courseTitle: ''
        };
        self = this;
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.selectCourseTitle = this.selectCourseTitle.bind(this);
        this.courseService = CourseService.instance;
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);
    }

    selectCourseTitle(title){
        this.setState({courseTitle: title});
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});

        this.courseService.findAllById(courseId)
            .then(function (response) {
                self.selectCourseTitle(response.title);
                // console.log("yo yo honey");
                // console.log(response);
            })
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand bignavBar">
                    <div className="container">
                        <h3>{this.state.courseTitle}</h3>
                    </div>
                </nav>
                <div className="row top-pad">
                    <ModuleList courseId={this.state.courseId}/>
                    <div className="col-8">
                    </div>
                </div>
            </div>
        );
    }

    // }
}