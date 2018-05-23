import React from 'react';
import { Link } from 'react-router-dom'

export default class LessonTabItem
    extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <li className="nav-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}`}>
                    {this.props.lesson.title}
                </Link>
                <span className="float-right">
                    <button onClick={() =>
                    {this.props.delete(this.props.lesson.id)}}>
                <i className="fa fa-trash"></i>
                    </button>
                </span>
            </li>
        );
    }
}
