import './style.css';

const Navigation:React.FC = () => {
    const sections = [{text: "WELCOME", color: "#97FB7D"}, {text: "PROJECTS", color: "#7DCBFB"}, {text: "EXPERIENCE", color: "#FBA17D"}, {text: "CONTACT", color: "#FBD17D"}];
    // const sections = [{text: "WELCOME", color: "#97FB7D"}, {text: "ABOUT", color: "#7DCBFB"}, {text: "PROJECTS", color: "#FBA17D"}, {text: "DESIGN - WIP", color: "#FBD17D"}, {text: "CONTACT", color: "#FBE87D"}];

    return (
        <div id="nav-box" >
            {sections.map((value, index)=> (
                <a key={index} style={{backgroundColor : value.color}} href={`#${value.text}`} color={value.color}><div className="nav-links" key={index}>{value.text}</div></a>
            ))}
        </div>
    )
}

export default Navigation;