'use client'

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
            <p id="desc" dangerouslySetInnerHTML={{__html: description}}></p>
            <div id="bottom">
                <a href={repo} target="_blank">repo</a>
                <a href={website} target="_blank">website</a>
                {/* <a  id="next" href=""><Image alt="more info button" src="/arrow.svg" height={30} width={30}/></a> */}
            </div>
        <style jsx>
            {`
                @font-face {
                    font-family: 'Baloo-2-300';
                    src: url('/fonts/Baloo2-Regular.ttf'); 
                }
                @font-face {
                    font-family: 'Baloo-2-900';
                    src: url('/fonts/Baloo2-ExtraBold.ttf'); // 
                }
                #desc {
                    margin: 0 10px 50px 10px;
                }
                #year {
                    // position: absolute;
                    // bottom: 15px;
                    // left: 20px;
                }
                #bottom {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    width: 100%;
                    margin: 10px;
                    align-items: center;
                    position: absolute;
                    bottom: 10px;
                }
                #Project-Card {
                    background-color: #FFF8E9;
                    box-shadow: 4px 4px black;
                    border: 2px solid black;
                    text-align: center;
                    border-radius: 20px;
                    position: relative;
                    min-width: 300px;
                    min-height: 400px;
                    margin: 20px 20px;
                    font-family: 'Baloo-2-300';
                }
                a {
                    text-decoration: underline;
                }
                #next {
                    margin-left: 10px;
                    border: 2px solid black;
                    border-radius: 20px;
                }
                h3 {
                    font-family: 'Baloo-2-900';
                }
                p {
                    font-family: 'Baloo-2-300';
                }
            `}
        </style>
        </div>
    )
}

export default Project;