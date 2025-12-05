import Image from "next/image"
import './style.css';

const Footer:React.FC = () => {

    return (
        <div id="footer">
            <span id="icons">
                <a href="https://github.com/jbacheldor" target="_blank"><Image alt="github icon" width={35} height={35} style={{margin: '5px 10px'}} src="/github-icon.png" /></a>
                <a href="https://www.linkedin.com/in/jessica-bacheldor/" target="_blank"><Image alt="linkedin icon" width={35} height={35} style={{margin: '5px 10px'}} src="/linkedin-icon.png"/></a>
            </span>
            <span>jessica.bacheldor@gmail.com</span>
        </div>
    )
}

export default Footer