
import React, {Component} from 'react'
import CourseCard from '/Users/priyalmittal/webdev-summer1-2018-react-mittal/src/components/CourseCard'
// import ModuleList from './ModuleList'
// import LessonTabs from './LessonTabs'
import CourseEdit from './CourseEdit'
import CourseList from "./CourseList";

class CourseManager extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Course Manager</h1>
                <CourseList/>
                {/*<CourseEdit/>*/}
                {/*<LessonTabs/>*/}
                {/*<ModuleList/>*/}
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}

export default CourseManager;