import React, {Component} from 'react';
import ModuleList from './ModuleList'
import CourseCard from 'src/component/CourseCard'

class CourseManager extends Component {
    render(){
        return(
            <div className="container-fluid">
                <h1>Course Manager</h1>
                <div className="card-deck">
                    <CourseCard/>
                </div>
            </div>
        )
    }
}
export default CourseManager;