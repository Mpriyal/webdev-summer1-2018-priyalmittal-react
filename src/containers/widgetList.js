import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/widget'

class WidgetList extends Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets(this.props.lessonId);
        console.log(this.props);
    }

    sortWidget() {
        this.props.widgets.sort(function (wid1, wid2) {
            return wid1.widgetOrder = wid2.widgetOrder
        });
        return this.props.widgets.map(widget => (
            <WidgetContainer widget={widget}
                             key={widget.id}/>))
    }

    render() {
        console.log("heloooooo")
        console.log(this.props.lessonId)
        return(
            <div className="container">
                {/*<h1>Widget List {this.props.widgets.length}</h1>*/}

                <button className="btn btn-success float-left" hidden={this.props.previewMode} onClick= {() => {this.props.save(this.props.lessonId)}}>
                    Save
                </button>
                <button className="btn btn-primary float-md-right" onClick={this.props.preview}>
                    Preview
                </button>
                <div>
                    {this.sortWidget}
                </div>
                <div>
                    {console.log(this.props.lessonId)}
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         lessonId={this.props.lessonId}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))}
                </div>
                <button onClick={this.props.addWidget}>Add widget
                </button>
            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
});
const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: (lessonId) => actions.findAllWidgets(dispatch, lessonId),
    addWidget: () => actions.addWidget(dispatch),
    save: (lessonId) => actions.save(dispatch, lessonId),
    preview: () => actions.preview(dispatch)
});
const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList)

export default App