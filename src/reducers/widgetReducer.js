import * as constants from "../constants/index"
import {RENDER_LINK_URL} from "../constants/index";

export const widgetReducer = (state = {widgets: [], activeLessonId: null, preview: false}, action) => {
    let newState
    switch (action.type) {

        case constants.FIND_WIDGETS_OF_LESSON:
            newState = Object.assign({},state);
            newState.widgets = action.widgets;
            return newState;


        case constants.LIST_TYPE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.RENDER_IMAGE_URL:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.src = action.src
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.RENDER_LINK_URL:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.href = action.href
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.MOVE_WIDGET_UP:
            state.widgets.map(widget=>{
                if(widget.id === action.widget.id && widget.widgetOrder !== 1){
                    action.widget.widgetOrder--;
                    widget = action.widget;
                }
                return Object.assign({}, widget)
            });
            return state;

        case constants.MOVE_WIDGET_DOWN:
            let maxVal = Math.max.apply(Math, state.widgets.map(function (widget) {
                return widget.widgetOrder;
            }));
            state.widgets.map(widget=>{
                if(widget.id === action.widget.id){
                    action.widget.widgetOrder++;
                    widget = action.widget;
                }
                return Object.assign({}, widget)
            });
            return state;

        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            }

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.headingWidgetSize = action.headingWidgetSize
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))

        case constants.SAVE:

            fetch('http://localhost:8080/api/lesson/'+action.lessonId+'/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })

            return state

        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets
            // console.log(newState);
            return newState

        case constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }
        case constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 10,
                        text: 'New Widget',
                        widgetType: 'Heading',
                        headingWidgetSize: '1'
                    }
                ]
            }
        default:
            return state
    }
}