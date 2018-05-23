import React from 'react'
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleService'
import ModuleEditor from './ModuleEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom';

let self

class ModuleList2 extends React.Component {
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
        this.titleChanged = this.titleChanged.bind(this);
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
        console.log('delete id: ' + moduleId);
        this.moduleService
            .deleteModule(courseId, moduleId).then(
            () => {
                this.findAllModulesForCourse(courseId);
            }
        );
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    //event listener
    titleChanged(event) {
        console.log(event.target.value); //captures whatever has been typed in the input field
        this.setState({module: {title: event.target.value}}); //title is set here
    }

    createModule() {
        console.log(this.state.module); //here we have the title as a json object in hand
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
                        <h3>Module List for course: {this.state.courseId}</h3>
                        <ul className="list-group">
                            <li className='list-group-item'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-10'>
                                            <input className="form-control"
                                                   onChange={this.titleChanged}
                                                   placeholder="New Module Title"/>
                                        </div>
                                        <div className='col-2'>
                                            <button onClick={this.createModule}
                                                    className="btn btn-primary btn-block">
                                                <i className=
                                                       "fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
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

export default ModuleList2;