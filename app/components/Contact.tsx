'use client'

import { useState } from "react"
import { turso } from "../client"

type FormType = {
    name: string,
    email: string,
    message: string,
}

const initialForm:FormType = {
    name: '',
    email: '',
    message: ''
}

const Contact:React.FC = () => {
    const [form, setForm] = useState<FormType>(initialForm)

    const updateForm = (e: React.FormEvent) => {
        setForm({
            ...form,
            [(e.target as HTMLElement).ariaLabel || '']: (e.target as HTMLInputElement).value
        })
    }

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await turso.execute({
                sql: "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
                args: [form.name, form.email, form.message]
            }).then(()=> {
                setForm(initialForm)
            })
        }catch(error) {
            console.log('error!')
        }
    }

    return (
        <div id="CONTACT">
            <form onSubmit={(e)=>submitForm(e)}>
                <h2>CONTACT</h2>
                <label>
                    <span>Name</span>
                    <input aria-label="name" value={form.name} onChange={(e)=>updateForm(e)}/>
                </label>
                <label>
                    <span>Email</span>
                    <input aria-label="email" value={form.email} onChange={(e)=>updateForm(e)}/>
                </label>
                <label>
                    <span>Message</span>
                    <textarea aria-label="message" value={form.message} onChange={(e)=>updateForm(e)}/>
                </label>
                <button onClick={(e)=>submitForm(e)}>Submit</button>
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
                    label > span {
                        padding-left: 5px;
                    }
                    input, textarea {
                        font-family: Baloo-2-300;
                        padding: 2px 10px;
                        box-shadow: 4px 4px black;
                        border: 2px solid black;
                        border-radius: 20px;
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
                        margin-top: 10px;
                        margin-bottom: 0px;
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