import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'

//Heading Widget
const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
    let selectElem
    let inputElem
    return(
        <div>
            <div hidden={preview}>
                <h3> Heading Widget: {widget.headingWidgetSize}</h3>
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.widgetText}
                       ref={node => inputElem = node}/>
                <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.headingWidgetSize}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <h3>Preview</h3>
            </div>
            {widget.headingWidgetSize == 1 && <h1>{widget.widgetText}</h1>}
            {widget.headingWidgetSize == 2 && <h2>{widget.widgetText}</h2>}
            {widget.headingWidgetSize == 3 && <h3>{widget.widgetText}</h3>}
        </div>
    )
}
const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize)
})

const stateToPropsMapper = state => ({
    preview: state.preview
})

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)

//Paragraph widget
const Paragraph = ({widget, preview, headingTextChanged}) => {
    let paraInputElem;
    return (
    <div>
        <div hidden={preview}>
        <h2>Paragraph</h2>
        <textarea>
            value={widget.widgetText}
            onChange={() => headingTextChanged(widget.id, paraInputElem.value)}
            ref={node => paraInputElem = node}/>
        </textarea>
        </div>
        <p>{widget.widgetText}</p>
    </div>
    )
}

//Image widget
const Image = () => (
    <h2>Image</h2>
)

//List widget
const List = () => (
    <h2>List</h2>
)

const Widget = ({widget, preview, dispatch}) => {
    let selectElement
    return(
        <div className="card container">
            <div hidden={preview}>
                {/*{widget.id}*/}
                {widget.widgetType}
                <select value={widget.widgetType}
                        onChange={e =>
                            dispatch({
                                type: 'SELECT_WIDGET_TYPE',
                                id: widget.id,
                                widgetType: selectElement.value
                            })} ref={node => selectElement = node}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                </select>
                <button className= "btn btn-danger float-right" onClick={e => (
                    dispatch({type: DELETE_WIDGET, id: widget.id})
                )}>Delete</button>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <Paragraph/>}
                {widget.widgetType==='List' && <List/>}
                {widget.widgetType==='Image' && <Image/>}
            </div>
        </div>
    )
}
const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget)
export default WidgetContainer
