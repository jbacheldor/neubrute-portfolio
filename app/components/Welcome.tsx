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
            month: '',
            day: ''
        }
    )

    const techStack = ['Typescript', 'Javascript', 'Next.JS', 'React', 'Turso', 'Supabase', 'Astro', 'Figma']

    const getTime = () => {
        const date = new Date();
        const parsed = date.toLocaleString('en-US', {
            timeZone: 'America/New_York',
        }).split(',')

        const time = parsed[1].split(':')

        const month_date = parsed[0].split('/')

        const pm = time[2].split(' ')

        setTime({
            hour: time[0],
            minute: time[1],
            second: time[2],
            pm: pm[1] == 'PM' ? true : false,
            month: month_date[0],
            day: month_date[1],
        })

        return Number(pm[0])
    }

    useEffect(()=> {
        getTime()
        const timeInterval = setInterval(() => {
                getTime()
            }, 1000);

        return () => clearInterval(timeInterval);
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
                        <p id="egg">{time.month}/{time.day}</p>
                        <p id="time">{`${time.hour}:${time.minute}`}</p>
                        <p id="egg2">{time.pm ? 'PM' : 'AM'}</p>
                        
                    </div>
                </div>
                <div id="intro-badge">
                    <Image style={{position: 'absolute', top: '-20px', right: '-20px'}} id="star-1" alt="star2" height={60} width={60} src="/Star 2.svg"/> 
                    <Image style={{position: 'absolute', top: '-20px', left: '-20px'}} id="star-2" alt="star1" height={60} width={60} src="/Star 1.svg"/> 
                    <Image style={{borderRadius: "20px"}} id="profile-pic" alt="profile-picture" height={200} width={300} src="/jess-2.png"/>
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
                <div aria-hidden id="carosel">
                    {techStack.map((val, index)=> (
                        <div className="techStack" key={index}>
                            {val}
                        </div>
                    ))}
                </div>
            </div>
        
        <style jsx>
            {`
            @media (min-width: 200px){
                #middle-section {
                    margin: 5%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    width: 70%;
                }
            }

            @media (min-width: 800px) {
                #middle-section {
                    margin: 5%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    width: 70%;
                }
            }
            #left-side {
                flex-direction: column;
                display: flex;
                align-items: center;
            }
            #intro-badge {
                background-color: var(--cream);
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
            @keyframes scroll {
                from {translate: 0;}
                to {translate: -100%}
            }
            #carosel-wrapper {
                width: 80%;
                display: flex;
                overflow-x: hidden;
                background-color: var(--yellow);
                border: 2px solid black;
                border-radius: 20px;
            }
            #carosel {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 1em;
                animation: scroll 25s infinite linear;
                padding-right: 1em;
            }
            .techStack {
                flex: 0 0 5em;
                font-family: 'Baloo-2-900';
                border-radius: 20px;
                background-color: var(--orange);
                border: 2px solid black;
                min-width: 150px;
                text-align: center;
                margin: 10px;
                padding: 10px 20px;
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
                background-color: var(--orange);
                border: 2px solid black; 
                font-family: Baloo-2-900;
                border-radius: 15px;
                width: 170px;
                position: relative;
                margin: 20px 10px;
            }
            #location {
                background-color: var(--yellow);
                border: 2px solid black;
                border-radius: 20px;
                padding: 10px 20px;
                margin: 10px;
                width: fit-content;
                text-align: center;
            }
            #WELCOME {
                font-family: Baloo-2-300;
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
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