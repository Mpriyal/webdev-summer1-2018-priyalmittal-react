import React from 'react';
import { Link } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <li className="list-group-item list-group-item-action">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.title}
                </Link>
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
