import React, {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/contactForm.scss';
import '../styles/shared.scss';

const recaptchaRef = React.createRef();

export default ({style, onSubmit}) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMsg] = useState('');

  return (
    <div style={style} className='contactContainer'>
      <div className='formTitle'>
        <h1 style={{fontSize: 25}} className='bigLightTitle'>Kontaktirajte nas</h1>
      </div>
      <form>
        <div className='formBlock'>
          <input className='fieldLong round' onChange={e => setName(e.target.value)} type='text' name='name' placeholder='IME' required/>
        </div>
        <div className='formBlock'>
          <input className='fieldLong round' onChange={e => setSurname(e.target.value)} type='text' name='surname' placeholder='PRIIMEK' required/>
        </div>
        <div className='formBlock'>
          <input className='fieldLong round' onChange={e => setMail(e.target.value)} type='text' name='mail' placeholder='MAIL' required/>
        </div>
        <div className='formBlock'>
          <textarea className='fieldArea round' onChange={e => setMsg(e.target.value)} name='message' placeholder='SPOROCILO' required/>
        </div>
        <div className='captcha'>
          <ReCAPTCHA
              sitekey="6LdUYq0UAAAAAMJh-miT8tLuDn3Fn5wCFVpeZq6F"
              ref={recaptchaRef}/>
        </div>
        <div className='formBlock captcha'>
          <input className='submitButton round' type='button' onClick={() =>
              onSubmit({
                name,
                surname,
                mail,
                message,
                captcha: recaptchaRef.current.getValue()
              })} value='POŠLJI'/>
        </div>
      </form>
    </div>
  )
}