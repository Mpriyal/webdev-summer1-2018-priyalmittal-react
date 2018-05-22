import React from 'react';
import { Link } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.title}
                </Link>
                <span className="float-right">
                    <button onClick={() =>
                    {this.props.delete(this.props.courseId, this.props.module.id)}}>
                <i className="fa fa-trash"></i>
                    </button>
                    <button>
                <i className="fa fa-pencil"></i>
                    </button>
                </span>
            </li>
        );
    }
}
