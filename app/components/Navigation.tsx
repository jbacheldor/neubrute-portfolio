'use client'

import { useState } from "react";

const Navigation:React.FC = () => {
    const sections = [{text: "WELCOME", color: "#97FB7D"}, {text: "ABOUT", color: "#7DCBFB"}, {text: "PROJECTS", color: "#FBA17D"}, {text: "DESIGN", color: "#FBD17D"}, {text: "CONTACT", color: "#FBE87D"}];

    return (
        <div id="nav-box" >
            {sections.map((value, index)=> (
                <a style={{backgroundColor : value.color}} href={`#${value.text}`} color={value.color}><div className="nav-links" key={index}>{value.text}</div></a>
            ))}
            <style jsx>
                {`
                    #nav-box {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        width: 200px;
                        background-color: #FFF8E9;
                        outline: 2px solid black;
                        box-shadow: 4px 4px black;
                        border-radius: 0 20px 20px 0;
                        position: absolute;
                        text-align: right;
                        top: 5%;
                        left: -165px;
                        -webkit-transition-property: all;
                        -webkit-transition-duration: 3s;
                    }
                    .nav-links {
                        transform: translateX(-70%);
                        padding-right: 10px;
                        -webkit-transition-property: all;
                        -webkit-transition-duration: 3s;
                    }
                    #nav-box:hover, .nav-links {
                        cursor: pointer;
                        left: -20px;
                    }
                    #nav-box:hover .nav-links {
                        transform: translateX(0px);
                    }
                    #nav-box > a:first-child {
                        border-radius: 0 20px 0 0;
                    }
                    #nav-box > a:last-child {
                        margin: 0;
                        border-radius: 0 0 20px 0;
                    }
                    #nav-box > a {
                        padding-top: 10px;
                        padding-right: 5px;
                        padding-bottom: 40px;
                        background-color: lightgrey;
                        width: 100%;
                        margin-bottom: 20px;
                    }
                `}
            </style>
        </div>
    )
}

export default Navigation;