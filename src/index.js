// import React from 'react';
// import ReactDOM from 'react-dom';
// // import '../node_modules/bootstrap/dist/css/bootstrap.css';
// // import '../node_modules/font-awesome/css/font-awesome.min.css';
// import Stateless from './components/Stateless'
//
// ReactDOM.render(
//     <Stateless message={"This is a stateless components"}/>,
//     document.getElementById('root')
// );

import React from 'react'
import ReactDOM from 'react-dom'
import CourseManager from './containers/CourseManager'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import HelloWorld from "./components/hello";
import Stateless from './components/Stateless'
import ModuleList from "./containers/ModuleList";
import ModuleListItem from "./components/ModuleListItem"
import ModuleList2 from "./containers/ModuleList2"
import App from "./examples/App"

ReactDOM.render(
    <div className="container-fluid">
        <App/>
        {/*<CourseManager/>*/}
    </div>,
    document.getElementById('root')
);
