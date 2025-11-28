'use client'

import { useState } from "react";

const About:React.FC = () => {
    const [time, setTime] = useState('')

    const techStack = ['Typescript', 'Javascript', 'Next.JS', 'React', 'Turso', 'Supabase', 'Astro', 'Typescript', 'Javascript', 'Next.JS', 'React', 'Turso', 'Supabase', 'Astro', 'Turso', 'Supabase', 'Astro']

    const getTime = () => {
        const date = new Date();
        date.toLocaleString('en-US', {
            timeZone: 'America/New_York',
        })

    }

    return (
        <div id="WELCOME">
            <div id="badge">
                <div id="top-section">
                    <p id="top">HELLO</p>
                    <p id="intro"> my name is </p>
                </div>
                <p id="middle">Jessica Bacheldor</p>
            </div>
            <div id="location">
                Based in NYC. Currently:
            </div>
            <div id="clock">
                <p id="egg">PM</p>
                <p id="time">08:28</p>
                <p id="egg2">AL</p>
            </div>
            <div id="carosel">
                {techStack.map((val, index)=> (
                    <div className="techStack" key={index}>
                        {val}
                    </div>
                ))}
            </div>
        
        <style jsx>
            {`
            @font-face {
                font-family: 'Baloo-2-300';
                src: url('/fonts/Baloo2-Regular.ttf'); 
            }
            @font-face {
                font-family: 'Baloo-2-900';
                src: url('/fonts/Baloo2-ExtraBold.ttf'); // 
            }
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-250px * 7))}
            }
            #carosel {
                display: flex;
                flex-direction: row;
                overflow: hidden;
                animation: scroll 50s linear infinite;
                width: calc(250px * 14);
            }
            .techStack {
                font-family: 'Baloo-2-900';
                border-radius: 20px;
                background-color: #97FB7D;
                box-shadow: 4px 4px black;
                border: 2px solid black;
                padding: 10px 20px;
                min-width: 150px;
                text-align: center;
                width: fit-content;
                margin: 10px;
            }
            #time {
                justify-self: center;
                font-size: 40px;
            }
            #egg {
                position: absolute;
                top: 5px;
                left: 10px;
            }
            #egg2 {
                position: absolute;
                bottom: 5px;
                right: 10px;
            }
            #clock {
                background-color: #FBD17D;
                border: 2px solid black; 
                font-family: Baloo-2-900;
                box-shadow: 4px 4px black;
                border-radius: 15px;
                width: 170px;
                position: relative;
            }
            #location {
                background-color: #FBE87D;
                border: 2px solid black;
                box-shadow: 4px 4px black;
                border-radius: 20px;
                padding: 10px;
                width: 30%;
                text-align: center;
            }
            #WELCOME {
                font-family: Baloo-2-300;
                height: 100vh;
                position: relative;
            }
            #top {
                font-family: Baloo-2-900;
                font-size: 40px;
                margin: -10px;
            }
            #top-section {
                display: flex;
                flex-direction: column;
                align-items: center;
                
            }
            #middle {
                font-family: Baloo-2-900;
                font-size: 30px;
                height: 25%;
                margin: 30px;
            }
            #badge {
                height: 220px;
                width: 330px;
                background: url('./NameTag.svg');
                background-repeat: no-repeat;
                background-size: 330px 220px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: 30px;
            }
                
            `}
        </style>
        </div>
    )
}

export default About;