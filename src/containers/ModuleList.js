import React from 'react'
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleService'
import ModuleEditor from './ModuleEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom';

let self;

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        self = this;
        this.state = {
            courseId: '',
            module: {title: ''},
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678}
            ]
        };
        this.moduleTitleChanged = this.moduleTitleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.moduleService = ModuleService.instance;
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleTitle(event) {
        this.setState({
                module: {
                    title: event.target.value
                }
            }
        );
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)
            });
    }

    deleteModule(courseId, moduleId) {
        if(window.confirm("Are you sure you want to delete this module?")) {
            this.moduleService
                .deleteModule(courseId, moduleId).then(
                () => {
                    window.location.href = '/course/' + courseId;
                }
            );
        }
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    //event listener
    moduleTitleChanged(event) {
        this.setState({module: {title: event.target.value}}); //title is set here
    }

    createModule() {
        let newModule;
        if (this.state.module.title === '') {
            newModule = {title: 'New Module'};
        }
        else {
            newModule = this.state.module;
        }
        this.moduleService
            .createModule(this.props.courseId, newModule).then(
            () => {
                this.findAllModulesForCourse(this.props.courseId);
            }
        );
    }

       renderListOfModules() {
        let modules = this.state.modules
            .map(function (module) {  //map accumulates a result and returns a concatenated result
                    return <ModuleListItem
                        title={module.title}
                        key={module.id}
                        module={module}
                        delete={self.deleteModule}
                        courseId={self.state.courseId}/> //its important to uniquely identify each element
                }
            );
        return (
            modules
        )
    }


    render() {
        return (
            <Router>
                <div className='row col-12'>
                    <div className='col-4'>
                                <nav className="navbar navbar-light navbar-expand bignavBar">
                                    <div className="container">
                                        <a className="navbar-brand color-white" href="#">Module:</a>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Enter new module title"
                                                   aria-label="Enter new module title" aria-describedby="basic-addon2"
                                                   onChange={this.moduleTitleChanged}/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button"
                                                        onClick={this.createModule}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                        <ul className="list-group">
                            {this.renderListOfModules()}
                        </ul>
                    </div>
                    <div className='col-8'>
                        <ul className="nav nav-tabs">
                            <Route path='/course/:courseId/module/:moduleId'
                                   component={ModuleEditor}/>
                        </ul>
                    </div>
                </div>
            </Router>
        )
    }
}

export default ModuleList;