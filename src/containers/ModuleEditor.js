import React from 'react'
import ModuleList2 from './ModuleList2'
import LessonTabs from './LessonTabs'

export default class ModuleEditor
    extends React.Component {
    render() {
        return (
            <div>
                <h2>Editing Course: {this.state.courseId}</h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList2 courseId={this.state.courseId}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                    </div>
                </div>
            </div>
        );
    }
}