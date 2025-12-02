'use client'
import { useState } from "react";
import Header from "./Header";
import PathButton from "./PathButton";
import { buttonPaths } from "@/app/data/paths";

const Path:React.FC = () => {
    const [open, setOpen] = useState('')

    const isOpen = (e: string) => {
        setOpen(e)
    }

    return (
        <div id='EXPERIENCE'>
        <div id="path-body">
            <Header title='Professional Career' subtitle="About Me" link="/Jessica-Bacheldor-Resume.pdf" name="Resume" pic="/resume.svg"/>
            <div id="path">
                {buttonPaths.map((value, index)=> {
                    const options = [50, 45, 40, 45, 50, 55, 50, 45, 40]
                    return <div key={index}><PathButton data={value?.data} index={index} right={options[index]} top={index} type={value.type}/></div>
                })}
            </div>
        </div>
            <style jsx>
                {`
                    #EXPERIENCE {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        position: relative;
                        height: calc(7 * 155px); 
                    }
                    #path-body {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 70%;
                    }
                    #path {
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
        </div>
    )
}

export default Path;