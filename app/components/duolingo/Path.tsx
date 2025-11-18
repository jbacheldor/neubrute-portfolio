'use client'
import Header from "./Header";

const Path:React.FC = () => {

    return (
        <div>
            <Header/>
            
            <style jsx>
                {`
                    div {
                        display: flex;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    )
}

export default Path;