import CRUD from "../api/CRUD";
import {useHistory} from "react-router-dom";

export default function ProjectsList({ projects }) {

    let history = useHistory();

    const loadProject = id => {
        localStorage.setItem("projectId", id);
        history.push("/project");
    }

    return (
        <div>
            {projects.map(p =>
                <div className="list-group-item list-group-item-action" onClick={() => loadProject(p.id)}>{p.name}</div>
            )}
        </div>
    )
}