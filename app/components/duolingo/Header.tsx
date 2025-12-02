'use client'

const Header:React.FC = () => {

    return (
        <div id="ABOUT">
            <div id="header">
                <span id="section" style={{fontSize: '18px'}}>Professional Career</span>
                <span id="intro" >About Me</span>
            </div>
            <div id="resume-button">
                <span id="section" style={{color: 'black'}}>Resume</span>
                <a target="_blank" href="/Jessica-Bacheldor-Resume.pdf">
                    <img src="/resume.svg" width={"45px"} height={"45px"}/> 
                </a>
            </div>
        <style jsx>
            {`
                #ABOUT {
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