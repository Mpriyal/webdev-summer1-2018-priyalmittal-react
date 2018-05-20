
import React, {Component} from 'react'
import CourseCard from '/Users/priyalmittal/webdev-summer1-2018-react-mittal/src/components/CourseCard'
// import ModuleList from './ModuleList'
// import LessonTabs from './LessonTabs'
import CourseEdit from './CourseEdit'

class CourseManager extends Component {
    render() {
        return (
            <div className="container-fluid">
                <CourseEdit/>
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