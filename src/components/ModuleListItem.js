import React from 'react';
import { NavLink } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <li className="list-group-item list-group-item-action">
                <NavLink activeStyle={{color:"#FFFFFF", backgroundColor:"#007bff"}} to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.title}
                </NavLink>
                <span className="float-right">
                    <i className="fa fa-times buttonColor" onClick={() => {
                        this.props.delete(this.props.courseId, this.props.module.id)
                    }}>
                        </i>
                </span>
            </li>
        );
    }
}
