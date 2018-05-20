import React from 'react'
import ModuleList2 from './ModuleList2'
import LessonTabs from './LessonTabs'

export default class CourseEdit
    extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <ModuleList2/>
                </div>
                {/*<div className="col-8">*/}
                    {/*<LessonTabs/>*/}
                {/*</div>*/}
            </div>
        );
    }
}