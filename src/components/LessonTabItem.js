import React from 'react';
import { NavLink } from 'react-router-dom'

export default class LessonTabItem
    extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <li className="nav-item">
                <div className="nav-link">
                    <NavLink activeStyle={{color:"#FFFFFF", backgroundColor:"#007bff"}} onClick={window.location.reload} to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}/widget`}>
                        {this.props.lesson.title}
                    </NavLink>

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
