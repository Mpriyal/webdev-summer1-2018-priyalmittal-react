import React from 'react'
import ModuleListItem from '../components/ModuleListItem'

class ModuleList2 extends React.Component {

    constructor() {
        super();
        this.state = {
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
    }

    renderListOfModules() {
        let modules = this.state.modules
            .map(function(module){  //map accumulates a result and returns a concatenated result
                return <ModuleListItem
                    title={module.title} key={module.id}/> //its important to uniquely identify each element
            }
            );
        return modules;
    }

    //event listener
    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module:{title: event.target.value}});
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/*<a className="navbar-brand" href="#">Course Manager</a>*/}
                    <h4>Course Manager</h4>
                    {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                            {/*data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                            {/*aria-expanded="false" aria-label="Toggle navigation">*/}
                        {/*<span className="navbar-toggler-icon"></span>*/}
                    {/*</button>*/}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                </button>
                        </form>
                    </div>
                </nav>
                {/*<input className="form-control"*/}
                        {/*onChange={this.titleChanged}*/}
                       {/*placeholder="New Course Title"/>*/}
                <ul className="list-group">
            {this.renderListOfModules()}
                </ul>
            </div>
        )
    }
}

export default ModuleList2;