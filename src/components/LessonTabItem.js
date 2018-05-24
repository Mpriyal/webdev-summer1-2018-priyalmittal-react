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
                <div className="nav-link">
                    <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}`}>
                        {this.props.lesson.title}
                    </Link>
                </div>
                <span className="float-right">
                    <i className="fa fa-times" onClick={() =>
                    {this.props.delete(this.props.lesson.id)}}>
                    </i>
                </span>
            </li>
        );
    }
}
