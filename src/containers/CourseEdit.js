import React from 'react'
import ModuleList2 from './ModuleList2'
import LessonTabs from './LessonTabs'
import ModuleEditor from "./ModuleEditor";

export default class CourseEdit
    extends React.Component {

    constructor(props){
        super(props);
        this.state = {courseId: '',
                moduleId: ''};
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);

    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    render() {
        if(this.state.moduleId!=undefined){
            return (
                <div>
                    <h2>Editing Course: {this.state.courseId}</h2>
                    <div className="row">
                        <div className="col-4">
                            <ModuleList2 courseId={this.state.courseId}/>
                        </div>
                        <div className="col-8">
                            <LessonTabs
                                courseId = {this.state.courseId}
                                moduleId = {this.state.moduleId}
                            />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h2>Editing Course: {this.state.courseId}</h2>
                    <div className="row">
                        <div className="col-4">
                            <ModuleList2 courseId={this.state.courseId}/>
                        </div>
                        <div className="col-8">
                        </div>
                    </div>
                </div>
            );
        }
    }
}