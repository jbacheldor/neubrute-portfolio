'use client'

const Contact:React.FC = () => {

    return (
        <div id="CONTACT">
            <form>
                <h2>CONTACT</h2>
                <label>
                    <span>Name</span>
                    <input></input>
                </label>
                <label>
                    <span>Email</span>
                    <input></input>
                </label>
                <label>
                    <span>Message</span>
                    <textarea/>
                </label>
                <button>Submit</button>
            </form>
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
                    #CONTACT {
                        font-family: Baloo-2-900;
                        display: flex;
                        justify-content: center;
                        
                    }
                    h2 {
                        font-size: 40px;
                        text-align: center;
                    }
                    form { 
                        background-color: #FBD17D;
                        box-shadow: 4px 4px black;
                        border: 2px black solid;
                        border-radius: 20px;
                        display: flex;
                        flex-direction: column;
                        width: fit-content;
                        padding: 20px;
                        margin-bottom: 50px;
                    }
                    label {
                        padding: 5px;
                        display: flex;
                        flex-direction: column;
                        font-size: 20px;
                    }
                    input, textarea {
                        font-family: Baloo-2-300;
                        padding: 2px 5px;
                        border: 2px solid black;
                        border-radius: 10px;
                        background-color: #FFF8E9;
                        width: 50ch;
                    }
                    button {
                        background-color: #97FB7D;
                        box-shadow: 4px 4px black;
                        border: 2px solid black;
                        border-radius: 20px;
                        width: fit-content;
                        padding: 5px 15px;
                        font-size: 20px;
                        align-self: center;
                    }
                    input:focus, textarea:focus {
                        outline: none;
                    }
                    button:hover {
                        cursor: pointer;
                    }
                    
                `}
            </style>
        </div>
    )
}

export default Contact