import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {FIND_ALL_WIDGETS, ADD_WIDGET, DELETE_WIDGET, SAVE} from "../constants/index"
import {widgetReducer} from "../reducers/widgetReducer"
import {WidgetContainer} from '../components/widget'
import {findAllWidgets, addWidget, save} from "../actions/index"
import App from '../containers/widgetList'
import {BrowserRouter as Router, Route} from 'react-router-dom';

let store = createStore(widgetReducer)

export default class LessonEditor
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: ''
        };
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
    }
    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    selectLesson(lessonId) {
        this.setState({lessonId: lessonId});
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);
        this.selectLesson(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
        this.selectModule(newProps.match.params.moduleId);
        this.selectLesson(newProps.match.params.lessonId);
    }
    render() {
        console.log("hello");
        console.log(this.state.lessonId);
        return (
            <Provider  store={store}>
                <App courseId = {this.props.match.params.courseId}
                        moduleId={this.props.match.params.moduleId}
                        lessonId={this.props.match.params.lessonId}/>
            </Provider>

        )
    }
}