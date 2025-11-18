'use client'
import Header from "./Header";
import PathButton from "./PathButton";

const Path:React.FC = () => {
    const buttons = [{type: '/star-button.svg'}, {type: '/diploma-button.svg'}, {type: '/star-button.svg'} , {type: '/neu-brute-chest-open.svg'}, {type: '/star-button.svg'}, {type: '/diploma-button.svg'},  {type: '/star-button.svg'}, {type: '/neu-brute-chest-close.svg'},  {type: '/tbh-button.svg'}]

    return (
        <div id="path-body">
            <Header/>
            <div id="path">
                {buttons.map((value, index)=> {
                    const options = [50, 40, 30, 40, 50, 60, 50, 40, 30]
                    console.log(options[index])
                    return <PathButton right={`${options[index]}%`} top={`${index*115 + 150}px`} type={value.type}/> 
                })}
            </div>
            <style jsx>
                {`
                    #path-body {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
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