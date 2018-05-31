import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        headingWidgetSize: newSize})
)

export const listTypeChanged = (dispatch, widgetId, newType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: newType})
)

export const findAllWidgets = (dispatch, lessonId)=> {

    fetch('http://localhost:8080/api/lesson/'+lessonId+"/widget")
        .then(response => (response.json()))
        .then(widgets => {
                widgets.sort(function (a,b) {
                        return a.widgetOrder - b.widgetOrder;
                })
                return dispatch({
                    type: constants.FIND_ALL_WIDGETS,
                    widgets: widgets })
        })
}

export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
)

export const save = (dispatch, lessonId) => {

    return (
    dispatch({type: constants.SAVE,
    lessonId: lessonId})
)};

export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)
export const renderLinkUrl = (dispatch, id, url) => (
            dispatch({
                type: constants.RENDER_LINK_URL,
                id: id,
                href: url})
        )
export const renderImageUrl = (dispatch, id, url) => (
    dispatch({
        type: constants.RENDER_IMAGE_URL,
        id: id,
        src: url})
)

// export const findWidgetOfLesson = (dispatch, lessonId) => {
//     if (lessonId === null) {
//         return null
//     }
//     fetch('http://localhost:8080/api/lesson/' + lessonId + '/widget')
//         .then(response => (response.json()))
//         .then(widgets => dispatch({
//             type: constants.FIND_WIDGETS_OF_LESSON,
//             activeLessonId: lessonId,
//             widgets: widgets
//         }))
// }
