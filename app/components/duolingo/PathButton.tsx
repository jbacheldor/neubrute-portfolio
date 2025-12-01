'use client'

import { useEffect, useState } from "react"
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

type Props = {
    type: string,
    right: number,
    top: number,
    // onClick: (id: string) => void,
    data?: any,
    index: number,
}

const PathButton:React.FC<Props> = ({type, index, right, top, data}) => {
    const [tooltip, setToolTip] = useState(false) 
    gsap.registerPlugin(ScrollTrigger);

    const openToolTip = () => {
        // console.log(object)
        setToolTip(!tooltip)
    }

    useEffect(()=> {
        gsap.to(`.tool-tip-${index}`, {
            scrollTrigger: {
                trigger: `.tool-tip-${index}`,
                // start when the top of the tool-tip hits the center of the viewport
                start: '-=300',
                // end when the bottom of the tool-tip hits the center of the viewport
                end: '+=50',
                // this ties animation progress directly to scroll
                scrub: true,
            },
            // duration: 2,
             start: '+=100',
            // start: 'top bottom',
            // end: 'top center',
            // visbility: 'visible',
            autoAlpha: 1,
        })
    }, [])


    return (
        <div>
            <div id="button" style={{right: `${right}%`, top: `${top*110 + 150}px`}} onClick={()=>openToolTip()}>
                <img src={type}/>
            </div>
            {/* {tooltip &&  */}
                <div id="tool-tip" className={`tool-tip-${index}`} style={{top: `${top*110 + 250}px`, right: `${right - 6}%`}}>
                    {data && 
                        <>
                            <h3>{data.title}</h3>
                            <span>{data.body}</span>
                            <div id="bottom-tool">
                                <span id="tool-loc">{data.location}</span>
                                <span>{data.date}</span>
                            </div>
                        </>
                    }
                </div>
            {/* } */}
            <style jsx>
                {`
                    .tool-tip-${index} {
                        visibility: hidden;
                    }
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
                        // padding-right: 15px;
                        padding-top: 5px;
                        padding-bottom: 10px;
                    }
                    div#tool-tip {
                        font-family: Baloo-2-300;
                        position: absolute;
                        background-color: #FBD17D;
                        width: 350px;
                        min-height: 150px;
                        border: 2px black solid;
                        border-radius: 20px;
                        padding-left: 15px;
                        padding-right: 15px;
                        box-shadow: 4px 4px black;
                        z-index: 2;
                        visibility: hidden;
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