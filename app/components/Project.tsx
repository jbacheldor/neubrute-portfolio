import './style.css'
import Image from "next/image";

type Props = {
    image: string,
    title: string,
    date?: string,
    key: number,
    description: string,
    repo: string,
    website: string,
}

const Project:React.FC<Props> = ({title, website, date, image, description, repo}) => {

    return (
        <div id="Project-Card">
            <Image style={{margin: "10px",
                    border: "2px solid black",
                    justifySelf: 'center',
                    borderRadius: "20px",
                    height: 'auto',
                    }} alt={title} src={image} height={100} width={270}/>
            <h3>{title}</h3>
            <p id="year">{date}</p>
            <p id="desc" dangerouslySetInnerHTML={{__html: description}} />
            <div id="bottom">
                <a href={repo} target="_blank">repo</a>
                <a href={website} target="_blank">website</a>
            </div>
        </div>
    )
}

export default Project;