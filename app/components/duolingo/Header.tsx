'use client'

const Header:React.FC = () => {

    return (
        <div id="ABOUT">
            <div id="header">
                <span id="section">SECTION 1, UNIT 1</span>
                <span id="intro">Introduce yourself</span>
            </div>
            <div id="resume-button">
                <a target="_blank" href="/Jessica-Bacheldor-Resume.pdf">
                    <img src="/resume.svg" width={"45px"} height={"45px"}/> 
                </a>
            </div>
        <style jsx>
            {`
                #ABOUT {
                    background-color: #97FB7D;
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
                    color: black;
                }
                span#section {
                    color: #5E9950;
                }
                #resume-button {
                    padding: 20px;
                    border: 3px solid black;
                    border-radius: 0 15px 15px 0;
                }
                #header {
                    display: flex;
                    flex-direction: column;
                    flex: 2;
                    padding: 20px;
                    border: 3px solid black;
                    border-radius: 15px 0 0 15px;
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