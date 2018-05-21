import React from 'react';
import CourseService from "../services/CourseService";
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {

    constructor(props) {
        super(props)
        this.courseService = CourseService.instance;
    }

    render() {
        return (
            <tr>
                <Link to={`/course/${this.props.course.id}`}>
                    <td>{this.props.course.title}</td>
                </Link>
                <td>{this.props.course.modified}</td>
                <td>
                    <button className="btn btn-danger"
                        onClick={() =>
                        {this.props.delete(this.props.course.id)}}>
                    Delete
                    </button>
                </td>
            </tr>
        )
    }
}
export default CourseRow;