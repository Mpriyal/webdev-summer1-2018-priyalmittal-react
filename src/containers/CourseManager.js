
import React, {Component} from 'react'
import CourseCard from '/Users/priyalmittal/webdev-summer1-2018-react-mittal/src/components/CourseCard'
// import ModuleList from './ModuleList'
// import LessonTabs from './LessonTabs'
import CourseEdit from './CourseEdit'
import CourseList from "./CourseList"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class CourseManager extends Component {
    render() {
        return (
            <Router>
            <div className="container-fluid">
                <h1>Course Manager</h1>
                <Route path="/courses"
                       component={CourseList}>
                </Route>
                <Route path="/course/:courseId"
                       component={CourseEdit}>
                </Route>

                {/*<CourseList/>*/}
                {/*<CourseEdit/>*/}
                {/*<LessonTabs/>*/}
                {/*<ModuleList/>*/}
                {/*<Route path="/examples">*/}
                    {/*<div className="card-deck">*/}
                        {/*<CourseCard/>*/}
                        {/*<CourseCard/>*/}
                        {/*<CourseCard/>*/}
                        {/*<CourseCard/>*/}
                        {/*<CourseCard/>*/}
                        {/*<CourseCard/>*/}
                    {/*</div>*/}
                {/*</Route>*/}
            </div>
            </Router>
        )
    }
}

export default CourseManager;