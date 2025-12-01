'use client'
import Image from "next/image"

const Footer:React.FC = () => {

    return (
        <div id="footer">
            <span id="icons">
                <a href="https://github.com/jbacheldor" target="_blank"><Image alt="github icon" width={35} height={35} style={{margin: '5px 10px'}} src="/github-icon.png" /></a>
                <a href="https://www.linkedin.com/in/jessica-bacheldor/" target="_blank"><Image alt="linkedin icon" width={35} height={35} style={{margin: '5px 10px'}} src="/linkedin-icon.png"/></a>
            </span>
            <span>jessica.bacheldor@gmail.com</span>
            <style jsx>
                {`
                    @media (min-width: 200px){
                        #footer {
                            width: 80%;
                            font-size: 18px;
                        }
                    }
                    @media (min-width: 800px){
                        #footer {
                            width: 75%;
                            font-size: 20px;
                        }
                    }
                    #icons {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                    }
                    #footer {
                        background-color: #FBE87D;
                        font-family: 'Baloo-2-900';
                        // font-size: 20px;
                        // width: 75%;
                        box-shadow: 4px 4px black;
                        border: 2px solid black;
                        border-radius: 20px;
                        display: flex;
                        flex-direction: row;
                        padding: 10px 20px;
                        align-items: center;
                        justify-content: space-between;
                        justify-self: center;
                        margin: 40px;
                    }
                `}
            </style>
        </div>
    )
}

export default Footer