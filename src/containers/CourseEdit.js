import React from 'react'
import ModuleList from './ModuleList'

export default class CourseEdit
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course
            courseId: '',
            moduleId: ''
        };
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
        return (
            <div>
                <div className="row">
                    <ModuleList courseId={this.state.courseId}/>
                    <div className="col-8">
                    </div>
                </div>
            </div>
        );
    }

    // }
}