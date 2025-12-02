'use client'

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
        <style jsx>
            {`
                #header-wrapper {
                    background-color: var(--green);
                    display: flex;
                    flex-direction: row;
                    width: 80%;
                    font-weight: 800;
                    margin: 20px;
                    border-radius: 15px;
                    box-shadow: 4px 10px #6db55a, 2px 13px #000, 7px 12px #000;
                    font-family: "Baloo-2-900";
                }

                #header-shadow {
                    width: 80%;

                }
                span#intro {
                    font-size: 20px;
                    color: black;

                }
                span#section {
                    color: #5E9950;
                }
                #resume-button {
                    padding: 20px;
                    border: 3px solid black;
                    border-radius: 0 15px 15px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                #resume-button:hover {
                    background-color:  var(--d-green);
                    transform: translateY(1px);
                    cursor: pointer;
                }
                #resume-button:hover > span {
                    color: black;
                }
                #header {
                    display: flex;
                    flex-direction: column;
                    flex: 2;
                    padding: 20px;
                    border: 3px solid black;
                    border-radius: 15px 0 0 15px;
                    justify-content: center;
                }
                #base {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
            `}
        </style>
        </div>
    )
}

export default Header;