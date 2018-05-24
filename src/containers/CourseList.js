import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService"
let self

class CourseList extends React.Component {

    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {course: {title: ''},
                    courses: []};
        self = this;
        this.courseTitleChanged = this.courseTitleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            })
    }

    courseTitleChanged(event) {
        this.setState({
            course:{title: event.target.value}
        });
    }

    createCourse() {
        let newCourse;
        if (this.state.course.title === '') {
            newCourse = {title: 'New Course'};
        }
        else {
            newCourse = this.state.course;
        }
        this.courseService
            .createCourse(newCourse)
            .then(() => { this.findAllCourses();
            }
            );
    }

    deleteCourse(courseId) {
        this.courseService.deleteCourse(courseId).then(
            () => {
                this.findAllCourses();
            }
        );
    }

    renderCourseRows() {
        let courses = null;
        if(this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id}
                                      title={course.title}
                                      course={course}
                                      delete={self.deleteCourse}/>
                }
            );
        }
        return (
            courses
        )
    }

    render() {
        return (
            <div>
            <table className="table">
            <thead>
            <tr>
            <th>
            <nav className="navbar navbar-light navbar-expand bignavBar">
                <div className="container">
                    <a className="navbar-brand color-light" href="#">Course Manager {this.state.courseId}</a>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter new course title"
                               aria-label="Enter new course title" aria-describedby="basic-addon2"
                               onChange={this.courseTitleChanged}/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button"
                                        onClick={this.createCourse}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                    </div>
                </div>
            </nav>
            </th>
            </tr>
            <tr>
                <th>Title</th>
                <th>Owned By</th>
                <th>Last Modified</th>
            </tr>
            </thead>
        <tbody>
        {this.renderCourseRows()}
        </tbody>
        </table>
            </div>
        )
    }
}
export default CourseList;