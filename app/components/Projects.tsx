'use client'

import Image from "next/image";

const Projects:React.FC = () => {

    return (
        <div id="PROJECTS">
            <div id="Color-Wheel">
                <div id="third"><img id="" src="./group 24.svg"></img></div>
                {/* <div id="first"><img id="" src="/group 2.svg"/></div>
                <div id="second"><img id="" src="/group 3.svg"/></div>
                <div id="third"><img id="" src="/group 4.svg"/></div> */}
            </div>
            <style jsx>
                {`
                    #PROJECTS {
                        display: flex;
                        margin-left: 100px;
                        height: 100vh;
                    }
                    #first {
                        position: absolute;
                        width: 200px;
                        // height: 600px;
                        // animation: linear spin1 10s 1 forwards;
                    }
                    #second {
                        position: absolute;
                        width: 300px;
                        // height: 600px;
                        // animation: linear spin2 10s 1 forwards;
                    }
                    #third {
                        position: absolute;
                        width: 400px;
                        // height: 600px;
                        animation: linear spin3 10s 1 forwards;
                    }
                    #Color-Wheel {
                        position: relative;
                    }
                    @keyframes spin3 {
                        from {
                            transform: rotate(-24.85deg);
                        }
                        to {
                            transform: rotate(65.15deg);
                        }
                    }
                    @keyframes spin2 {
                        from {
                            transform: rotate(-11.55deg);
                        }
                        to {
                            transform: rotate(78.45deg);
                        }
                    }
                    @keyframes spin1 {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(90deg);
                        }
                    }

                `}
            </style>
        </div>
    )
}

export default Projects;