'use client'

import { useState } from "react"

type Props = {
    type: string,
    right: number,
    top: number,
    // onClick: (id: string) => void,
    data?: any,
}

const PathButton:React.FC<Props> = ({type, right, top, data}) => {
    const [tooltip, setToolTip] = useState(false) 

    const openToolTip = () => {
        // console.log(object)
        setToolTip(!tooltip)
    }


    return (
        <div>
            <div id="button" style={{right: `${right}%`, top: `${top*110 + 150}px`}} onClick={()=>openToolTip()}>
                <img src={type}/>
            </div>
            {tooltip && 
                <div id="tool-tip"  style={{top: `${top*110 + 250}px`, right: `${right - 6}%`}}>
                    {data && 
                        <div>
                            <h3>{data.title}</h3>
                            <span>{data.body}</span>
                            <div id="bottom-tool">
                                <span id="tool-loc">{data.location}</span>
                                <span>{data.date}</span>
                            </div>
                        </div>
                    }
                </div>
            }
            <style jsx>
                {`
                    @font-face {
                        font-family: 'Baloo-2-300';
                        src: url('/fonts/Baloo2-Regular.ttf'); 
                    }
                    @font-face {
                        font-family: 'Baloo-2-900';
                        src: url('/fonts/Baloo2-ExtraBold.ttf'); 
                    }
                    @font-face {
                        font-family: 'Baloo-2-700';
                        src: url('/fonts/Baloo2-Bold.ttf'); 
                    }
                    #tool-loc {
                        font-family: 'Baloo-2-700';
                    }
                    h3 {
                        font-family: Baloo-2-900;
                        font-size: 28px;
                        padding: 8px 8px 4px 0;
                    }
                    div#bottom-tool {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        padding-right: 15px;
                        padding-top: 4px;
                    }
                    div#tool-tip {
                        font-family: Baloo-2-300;
                        position: absolute;
                        background-color: #FBD17D;
                        width: 350px;
                        height: 150px;
                        border: 2px black solid;
                        border-radius: 20px;
                        padding-left: 15px;
                        box-shadow: 4px 4px black;
                        z-index: 2;
                    }
                    div#button {
                        position: absolute;
                    }
                    img {
                        width: 95px;
                        height: 95px;
                    }
                    img:hover {
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    )
}

export default PathButton;