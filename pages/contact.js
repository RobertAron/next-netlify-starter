import {useState} from 'react'


export default function Contact(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>hello world!!</h1>
            {count}
            <button onClick={()=>setCount(count+1)}>add</button>
            <button onClick={()=>setCount(count-1)}>subtact</button>
            <form name='contact' action='/sucess' method='POST' data-netlify-recaptcha="true" data-netlify='true'>
                <input type='hidden' name='form-name' value='contact'/>
                <p>
                    <label htmlFor='yourName'>Your Name</label>
                    <input type='text' name='name' id='yourname'/>
                </p>
                <p>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' name='email' id='email'/>
                </p>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}