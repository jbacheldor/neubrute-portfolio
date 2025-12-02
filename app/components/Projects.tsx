'use client'

import Image from "next/image";

import Project from "./Project";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Header from "./duolingo/Header";
const ProjectList = [
    {
        image: '/drag-and-drop.png',
        title: 'Hangul Drag and Drop',
        description: "A simple <b style='font-family: Baloo-2-700'>vanilla js</b> game designed to teach users the Korean Alphabet - inspired by <a target='_blank' style='text-decoration: underline' href='https://endual.com/'>Adrian's</a> <a target='_blank' style='text-decoration: underline' href='https://drlingua.com/japanese/games/kana-bento/'>Japanese Drag and Drop Game</a>",
        date: '2024',
        website: 'https://github.com/jbacheldor/dragAndDropHangul',
        repo: 'https://jbacheldor.github.io/dragAndDropHangul/'
    },
    {
        image: '/verb.png',
        title: 'Japanese Verb Conjugation',
        description: 'A <b style="font-family: Baloo-2-700">vanilla js</b> game designed to help teach Japanese conjugation to beginners by matching vocabulary with grammar points with when they are introduced in the Japanese textbook: Genki.',
        date: '2025',
        website: 'https://jbacheldor.github.io/japaneseConjugator/',
        repo: 'https://github.com/jbacheldor/japaneseConjugator'
    },
    {
        image: '/hottakes.png',
        title: 'Hot Takes',
        description: 'A <b style="font-family: Baloo-2-700">Next.JS, Typescript, & Supabase</b> Web app inspired by Subway Hotcakes with Kareem Rahma and Kahoot - this website allows individuals to submit hot takes and then guess on which takes are their peers, with corresponding accuracy rates, using game-based isolation! <a style="text-decoration: underline" target="_blank" href="https://www.linkedin.com/in/bdettmer/">Bradley Dettmer</a> and I pair programmed this website for a non-programming talk at the Recurse Center.',
        date: '2025',
        website: '',
        repo: 'https://github.com/jbacheldor/hot_takes'
    },
    {
        image: '/the-lineup.png',
        title: 'Crush Tracker - WIP',
        description: "A <b style='font-family: Baloo-2-700'>Next.JS</b> website using firebase auth, <b style='font-family: Baloo-2-700'>turso</b>, and <b style='font-family: Baloo-2-700'>typescript</b>, to allow users to make notes about their crushes, share with a choosen pool of individuals, and allow those individuals the opporunity to give feedback. WIP - please email me if you'd like the demo credentials.",
        date: '2025',
        repo: 'https://github.com/jbacheldor/thelineup',
        website: 'https://the-lineup.netlify.app/'
    }
]

const Projects:React.FC = () => {
    return (
        <div id="PROJECTS">
            <div id='project-wrapper'>
            <Header title='Personal Projects' subtitle="Recurse and Beyond" link="https://github.com/jbacheldor" name="Github" pic="/github-icon.png"/>            
            <div id="project-list">
            {ProjectList.map((val, index)=> (
                <Project key={index} {...val}/>
            ))}
            </div>
            </div>
            <style jsx>
                {`
                    @media (min-width: 200px){
                        #Color-Wheel {
                            min-height: 300px;
                        }
                        #third {
                            margin-top: 70px;
                            width: 220px;
                            margin-left: 0px;
                        }
                        #project-list {
                            // margin-top: 100px;
                            width: 70%;
                        }
                    }

                    @media (min-width: 800px){
                        #Color-Wheel {
                            min-height: 600px;
                        }
                        #third {
                            width: 400px;
                            margin-top: 0px;
                            margin-left: 200px;
                        }
                        #project-list {
                            // margin-top: 600px;
                            width: 60%;
                        }
                    }

                    #project-wrapper {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 70%;
                        margin: 20px 0;
                    }
                    #section-badge {
                        border-radius: 20px;
                        border: 2px solid black;
                        background-color: var(--red);
                        padding: 10px;
                        width: fit-content;
                        margin: 20px;
                        font-family: Baloo-2-900;
                        
                    }
                    #PROJECTS {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                    }
                    #project-list {
                        display: grid;
                        grid-template-columns: auto auto;
                        border: 2px solid black;
                        width: min-content;
                        margin: 30px 0;
                        border-radius: 20px;
                        background-color: var(--blue);
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
                        // width: 400px;
                        // animation: linear spin3 10s 1 forwards;
                    }
                    #Color-Wheel {
                        position: relative;
                        // min-height: 600px;
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