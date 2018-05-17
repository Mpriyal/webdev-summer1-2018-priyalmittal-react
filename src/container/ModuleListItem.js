import ModuleList from './ModuleList'
export default class ModuleList
    extends React.Component {
    render() {
        return (
            <ul className="list-group">
                <ModuleList/><ModuleListItem/>...
            </ul>
        );
    }
}