'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const Welcome:React.FC = () => {
    const [time, setTime] = useState(
        { 
            hour: '',
            minute: '',
            second: '', 
            pm: false,
        }
    )

    const techStack = ['Typescript', 'Javascript', 'Next.JS', 'React', 'Turso', 'Supabase', 'Astro', 'Typescript', 'Javascript', 'Next.JS', 'React', 'Turso', 'Supabase', 'Astro']

    const getTime = () => {
        const date = new Date();
        const parsed = date.toLocaleString('en-US', {
            timeZone: 'America/New_York',
        }).split(',')[1].split(':')

        const pm = parsed[2].split(' ')

        setTime({
            hour: parsed[0],
            minute: parsed[1],
            second: parsed[2],
            pm: pm[1] == 'PM' ? true : false
        })

        return Number(pm[0])
    }

    useEffect(()=> {
        // this gets the difference between the times
        const seconds = getTime()
        const remaining = 60000 - (seconds * 1000)

        // this calls the difference ONCE and then sets interval for the rest
         setTimeout(()=> {
            getTime()

            const timeInterval = setInterval(() => {
                getTime()
            }, 60000);

            return () => clearInterval(timeInterval);

        }, remaining)
    }, [])

    return (
        <div id="WELCOME">
            <div id="middle-section">
                <div id="left-side">
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
                        <p id="egg">{time.pm ? 'PM' : 'AM'}</p>
                        <p id="time">{`${time.hour}:${time.minute}`}</p>
                        <p id="egg2">AL</p>
                    </div>
                </div>
                <div id="intro-badge">
                    <Image style={{position: 'absolute', top: '-20px', right: '-20px'}} id="star-1" alt="star2" height={60} width={60} src="/Star 2.svg"/> 
                    <Image style={{position: 'absolute', top: '-20px', left: '-20px'}} id="star-2" alt="star1" height={60} width={60} src="/Star 1.svg"/> 
                    <Image style={{borderRadius: "20px"}} id="profile-pic" alt="profile-picture" height={200} width={300} src="/young-me.png"/>
                    <h4>Full-Stack Web Developer</h4>
                    <p>I’m a passionate web developer focused on end-to-end development from project specs, ux/ui, to optimization and scaling. I focus on bringing to life creative ideas in original ways.</p>
                </div>
            </div>
            <div id="carosel-wrapper">
                <div id="carosel">
                    {techStack.map((val, index)=> (
                        <div className="techStack" key={index}>
                            {val}
                        </div>
                    ))}
                </div>
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
            #middle-section {
                margin: 5%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
            }
            #left-side {
                flex-direction: column;
                display: flex;
                align-items: center;
            }
            #intro-badge {
                background-color: #FFF8E9;
                border: 2px solid black;
                // box-shadow: 4px 4px black;
                border-radius: 20px;
                width: 350px;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px;
                position: relative;
                height: fit-content;
            }
            #intro-badge > p {
                margin: 0 20px;
            }
            h4 {
                font-family: 'Baloo-2-900';
                font-size: 20px;
                margin: 10px 0;
            }
            #profile-pic {
                border-radius: 20px;
                border: 2px solid black;
            }
            #carosel-wrapper {
                width: 100wv;
                overflow: hidden;
            }
            #carosel {
                display: flex;
                flex-direction: row;
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
                margin: 20px 10px;
            }
            #location {
                background-color: #FBE87D;
                border: 2px solid black;
                box-shadow: 4px 4px black;
                border-radius: 20px;
                padding: 10px 20px;
                margin: 10px;
                width: fit-content;
                text-align: center;
            }
            #WELCOME {
                font-family: Baloo-2-300;
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

export default Welcome;