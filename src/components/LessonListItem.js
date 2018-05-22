import React from 'react';
// import { Link } from 'react-router-dom'

export default class LessonListItem
    extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <div>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        {this.props.title}</a>
                </li>
            </div>
        );
    }
}
