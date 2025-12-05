import './style.css';
import Project from "./Project";
import Header from "./duolingo/Header";
import { ProjectList } from "../data/projects";

const Projects:React.FC = () => {
    return (
        <div id="PROJECTS">
            <div id='project-wrapper'>
            <Header title='Personal Projects' subtitle="Recurse and Beyond" link="https://github.com/jbacheldor" name="Github" pic="/github-icon.png"/>            
            <div id="project-list">
            {ProjectList.map((val, index)=> (
                <Project key={index} {...val}/>
            ))}
            </div>
            </div>
        </div>
    )
}

export default Projects;