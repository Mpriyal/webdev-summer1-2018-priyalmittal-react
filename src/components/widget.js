import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET, MOVE_WIDGET_DOWN, MOVE_WIDGET_UP} from "../constants/index"
import * as actions from '../actions'
import {renderLinkUrl} from '../actions'

//Heading Widget
const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
    let selectElem
    let inputElem
    return(
        <div className="container-fluid">
            <div hidden={preview}>
                <h3> Heading Widget: {widget.headingWidgetSize}</h3>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Heading Text</span>
                    </div>
                    <input className="form-control"
                           onChange={() => headingTextChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           placeholder="Enter Heading text"
                           ref={node => inputElem = node}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" htmlFor="inputGroupSelect01">Heading Size</span>
                    </div>
                <select className="custom-select"
                        id="inputGroupSelect01"
                        onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.headingWidgetSize}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Widget Name</span>
                    </div>
                    <input className="form-control"
                           placeholder="Widget Name"/>
                </div>
            </div>
            {/*<h3>Preview</h3>*/}
            {widget.headingWidgetSize == 1 && <h1>{widget.text}</h1>}
            {widget.headingWidgetSize == 2 && <h2>{widget.text}</h2>}
            {widget.headingWidgetSize == 3 && <h3>{widget.text}</h3>}
        </div>
    )
}
const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    renderLinkUrl: (id, url) =>
        actions.renderLinkUrl(dispatch, id, url),
    listTypeChanged: (widgetId, newType) =>
        actions.listTypeChanged(dispatch, widgetId, newType),
    renderImageUrl: (id, url) =>
        actions.renderImageUrl(dispatch, id, url),
})

const stateToPropsMapper = state => ({
    preview: state.preview
})

//Paragraph widget
const Paragraph = ({widget, preview, headingTextChanged}) => {
    let paraInputElem;
    return (
    <div className="container-fluid">
        <div hidden={preview}>
        <h2>Paragraph</h2>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Heading Text</span>
                </div>
        <textarea
            className="form-control"
            placeholder="Enter Paragraph text"
            value={widget.text}
            onChange={() => headingTextChanged(widget.id, paraInputElem.value)}
            ref={node => paraInputElem = node}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Widget Name</span>
                </div>
                <input className="form-control"
                       placeholder="Widget Name"/>
            </div>
        </div>
        <p>{widget.text}</p>
    </div>
    )
}

//Image widget
const Image = ({widget, preview, renderImageUrl}) => {
    let imageInputElem;
    return (
        <div className="container-fluid">
            <div hidden={preview}>
        <h2>Image</h2>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">URL</span>
                    </div>
                    <input className="form-control"
                           onChange={() => renderImageUrl(widget.id, imageInputElem.value)}
                           value={widget.src}
                           placeholder="Insert Image URL"
                           ref={node => imageInputElem = node}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Widget Name</span>
                    </div>
                    <input className="form-control"
                           placeholder="Widget Name"/>
                </div>
            </div>
            <img src={widget.src} alt="No image to display"/>
        </div>
        )
}

const displayList = (text, zeroOrOne) => {
    console.log("bro");
    console.log(zeroOrOne);
    let elemArr = (text.split("\n"));

    if(zeroOrOne === "ordered"){
        return(
            <ol className="list-group">
                {elemArr.map(elem => (<li> {elem} </li>))}
            </ol>
        )
    }
    else{
        return(
            <ul className="list-group">
                {elemArr.map(elem => (<li> {elem} </li>))}
            </ul>
        )
    }

}

//List widget
const List = ({widget, preview, headingTextChanged, headingSizeChanged, listTypeChanged}) => {
    let listInputElem;
    let listSelectElem;
return (
    <div className="container-fluid">
        <div hidden={preview}>
            <h2>List</h2>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">List Text</span>
                </div>
                <textarea
                    className="form-control"
                    placeholder="Enter Paragraph text"
                    value={widget.text}
                    onChange={() => headingTextChanged(widget.id, listInputElem.value)}
                    ref={node => listInputElem = node}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" htmlFor="inputGroupSelect01">List Type</span>
                </div>
                <select className="custom-select"
                        id="inputGroupSelect01"
                        onChange={() => listTypeChanged(widget.id, listSelectElem.value)}
                        value={widget.listType}
                        ref={node => listSelectElem = node}>
                    <option value='ordered'>Ordered</option>
                    <option value='unordered'>Unordered</option>
                </select>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Widget Name</span>
                </div>
                <input className="form-control"
                       placeholder="Widget Name"/>
            </div>
        </div>
        {displayList(widget.text, widget.listType)}
    </div>
)
}

//Link widget
const Link =({widget, preview, headingTextChanged, renderLinkUrl}) => {
    let linkInputElem;
    let linkTextElem;
    return (
        <div className="container-fluid">
        <div hidden={preview}>
            <h2>Link</h2>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">URL</span>
                </div>
                <input className="form-control"
                       onChange={() => renderLinkUrl(widget.id, linkInputElem.value)}
                       value={widget.href}
                       placeholder="Insert URL"
                       ref={node => linkInputElem = node}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Link Text</span>
                </div>
                <input
                    className="form-control"
                    placeholder="Link text"
                    value={widget.text}
                    onChange={() => headingTextChanged(widget.id, linkTextElem.value)}
                    ref={node => linkTextElem = node}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Widget Name</span>
                </div>
                <input className="form-control"
                       placeholder="Widget Name"/>
            </div>
            <a href={widget.href} target="_blank">{widget.text}</a>
        </div>
        </div>
    )
}

const Widget = ({widget, lessonId, preview, dispatch}) => {
    let selectElement
    return(
        <div className="card container">
            <div hidden={preview}>
                <select value={widget.widgetType}
                        onChange={e =>
                            dispatch({
                                type: 'SELECT_WIDGET_TYPE',
                                id: widget.id,
                                widgetType: selectElement.value
                            })} ref={node => selectElement = node}>
                    <option>Select One</option>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>
                <button className= "fa fa-close btn btn-danger float-right" onClick={e => (
                    dispatch({type: DELETE_WIDGET, id: widget.id})
                )}></button>
                <button className= "fa fa-arrow-up btn btn-warning float-right" onClick={e => (
                    dispatch({type: MOVE_WIDGET_UP, widget: widget})
                )}></button>
                <button className= "fa fa-arrow-down btn btn-warning float-right" onClick={e => (
                    dispatch({type: MOVE_WIDGET_DOWN, widget: widget})
                )}></button>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType==='List' && <ListContainer widget={widget}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget}/>}
            </div>
        </div>
    )
}

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)
const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)
const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)
const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)
const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List)
const WidgetContainer = connect(state => ({
    lessonId: state.lessonId,
    preview: state.preview
}))(Widget);
export default WidgetContainer
