
import React, {Component} from 'react'
import CourseEdit from './CourseEdit'
import CourseList from "./CourseList"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class CourseManager extends Component {
    render() {
        return (
            <Router>
            <div className="container-fluid">
                <Route path="/courses"
                       component={CourseList}>
                </Route>
                <Route path="/course/:courseId"
                       component={CourseEdit}>
                </Route>
            </div>
            </Router>
        )
    }
}

export default CourseManager;