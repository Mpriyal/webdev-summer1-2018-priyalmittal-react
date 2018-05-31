import React from 'react'
import LessonTabs from './LessonTabs'
import App from '../containers/widgetList'
import {Provider, connect} from 'react-redux'
import CourseEdit from "./CourseEdit";
import {Route, Link} from 'react-router-dom'
import {createStore} from "redux";
import {widgetReducer} from "../reducers/widgetReducer";
import LessonEditor from "./LessonEditor";

export default class ModuleEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: ''
        };
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.selectCourse(newProps.match.params.courseId);
        this.selectModule(newProps.match.params.moduleId);
    }

    render() {
        return (
            <div>
                <LessonTabs moduleId={this.state.moduleId}
                            courseId={this.state.courseId}/>
                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/widget"
                       component={LessonEditor}>
                </Route>

            </div>
        )
    }
}