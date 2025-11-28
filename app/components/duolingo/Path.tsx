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
        <div id='path-wrapper'>
        <div id="path-body">
            <Header/>
            <div id="path">
                {buttonPaths.map((value, index)=> {
                    const options = [50, 45, 40, 45, 50, 55, 50, 45, 40]
                    return <PathButton data={value?.data} right={options[index]} top={index} type={value.type}/> 
                })}
            </div>
        </div>
            <style jsx>
                {`
                    #path-wrapper {
                        width: 100%;
                        display: flex;
                        justify-content: center;
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