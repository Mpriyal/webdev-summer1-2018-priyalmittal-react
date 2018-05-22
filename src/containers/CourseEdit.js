import React from 'react'
import ModuleList2 from './ModuleList2'
import LessonTabs from './LessonTabs'
import ModuleEditor from "./ModuleEditor";

export default class CourseEdit
    extends React.Component {

    constructor(props){
        super(props);
        this.state = {courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return (
            <div>
                <h2>Editing Course: {this.state.courseId}</h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList2 courseId={this.state.courseId}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                    </div>
                </div>
            </div>
        );
    }
}