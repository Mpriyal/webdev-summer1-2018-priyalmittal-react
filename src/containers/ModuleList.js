import React from 'react'
import ModuleListItem from '/Users/priyalmittal/webdev-summer1-2018-react-mittal/src/components/ModuleListItem';

export default class ModuleList
    extends React.Component {
    render() { return (
        <ul className="list-group">
            <ModuleListItem/>
            <ModuleListItem/>
            <ModuleListItem/>
            <ModuleListItem/>
            <ModuleListItem/>
            <ModuleListItem/>
            <ModuleListItem/>
        </ul>
    );}}
