import React from 'react';
import CourseService from "../services/CourseService";
import {Link} from 'react-router-dom'

class CourseRow extends React.Component {

    constructor(props) {
        super(props)
        this.courseService = CourseService.instance;
    }

    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>{'me'}</td>
                <td>{this.props.course.modified.toString().split('T')[0]}</td>
                <td>
                    {/*<button className="btn btn-danger"*/}
                    {/*onClick={() => {*/}
                    {/*this.props.delete(this.props.course.id)*/}
                    {/*}}>*/}
                    <i className="fa fa-times buttonColor" onClick={() => {
                        this.props.delete(this.props.course.id)
                    }}>
                    </i>
                </td>
            </tr>
        )
    }
}

export default CourseRow;