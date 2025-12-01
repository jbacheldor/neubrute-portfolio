'use client'

type Props = {
    header?: string,
    date?: string,
    body?: string,
    location?: string,
}

const ToolTip:React.FC<Props> = (Props) => {
    const {header, date, body, location} = Props

    return (
        <div>
            <div>
                {header}
            </div>
            <div>
                {body}
            </div>
            <div>
                <span>{location}</span>
                <span>{date}</span>
            </div>
            <style jsx>
                {`
                
                `}
            </style>
        </div>
    );
}

export default ToolTip;