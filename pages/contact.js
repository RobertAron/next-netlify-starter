import {useState} from 'react'


export default function Contact(){
    console.log('mount')
    // const [count, setCount] = useState(0)
    return (
        <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
  <p>
    <label>Email: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    )
}