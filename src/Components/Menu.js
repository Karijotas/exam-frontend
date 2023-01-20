import { Link } from "react-router-dom";

export function Menu() {
    return (<div className="Menu">
        <Link to='/'>Front Page</Link>
        &nbsp;|&nbsp;
        <Link to='/create'>Create</Link>

            </div>);
}
