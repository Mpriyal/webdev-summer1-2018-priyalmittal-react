import React from 'react';
import CourseService from "../services/CourseService";
class CourseRow extends React.Component {

    constructor(props) {
        super(props)
        this.courseService = CourseService.instance;
    }

    render() {
        return (
            <tr>
                <td>{this.props.course.title}</td>
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