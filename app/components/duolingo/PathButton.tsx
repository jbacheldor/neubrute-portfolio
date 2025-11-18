'use client'

type Props = {
    type: string,
    right: string,
    top: string,
}

const PathButton:React.FC<Props> = ({type, right, top}) => {

    return (
        <div style={{right: right, top: top}}>
            <img src={type}/>
            <style jsx>
                {`
                    div {
                        position: absolute;
                    }
                    img {
                        width: 100px;
                        height: 100px;
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