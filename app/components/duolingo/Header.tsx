import '../style.css'

type Props = {
    title: string,
    subtitle: string,
    link: string,
    pic: string,
    name: string,
}

const Header:React.FC<Props> = ({title, subtitle, name, link, pic}) => {

    return (
        <div id="header-wrapper">
            <div id="header">
                <span id="section" style={{fontSize: '18px'}}>{title}</span>
                <span id="intro" >{subtitle}</span>
            </div>
            <div id="resume-button">
                <span id="section" style={{color: 'black'}}>{name}</span>
                <a target="_blank" href={link}>
                    <img src={pic} width={"45px"} height={"45px"}/> 
                </a>
            </div>
        </div>
    )
}

export default Header;