import Header from "./Header";
import PathButton from "./PathButton";
import { buttonPaths } from "@/app/data/paths";
import '../style.css'

const Path:React.FC = () => {

    return (
        <div id='EXPERIENCE'>
        <div id="path-body">
            <Header title='Professional Career' subtitle="About Me" link="/Jessica-Bacheldor-Resume.pdf" name="Resume" pic="/resume.svg"/>
            <div id="path">
                {buttonPaths.map((value, index)=> {
                    const options = [50, 45, 40, 45, 50, 55, 50, 45, 40]
                    return <div key={index}><PathButton data={value?.data} index={index} right={options[index]} top={index} type={value.type}/></div>
                })}
            </div>
        </div>
        </div>
    )
}

export default Path;