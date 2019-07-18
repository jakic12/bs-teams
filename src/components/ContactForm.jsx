import React, {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/contactForm.scss';
import '../styles/shared.scss';

const recaptchaRef = React.createRef();

export default ({style, onSubmit}) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMsg] = useState('');

  return (
    <div style={style} className='contactContainer'>
      <div className='formTitle'>
        <h1 className='bigLightTitle'>Kontaktirajte nas</h1>
      </div>
      <form>
        <div className='formBlock'>
          <input className='fieldLong round' onChange={e => setName(e.target.value)} type='text' name='name' placeholder='IME'/>
        </div>
        <div className='formBlock'>
          <input className='fieldLong round' onChange={e => setSurname(e.target.value)} type='text' name='surname' placeholder='PRIIMEK'/>
        </div>
        <div className='formBlock'>
          <input className='fieldLong round' onChange={e => setPhone(e.target.value)} type='text' name='phone' placeholder='TELEFON'/>
        </div>
        <div className='formBlock'>
          <input className='fieldArea round' onChange={e => setMsg(e.target.value)} type='text' name='message' placeholder='SPOROCILO'/>
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
                phone,
                message,
                captcha: recaptchaRef.current.getValue()
              })} value='POSLJI'/>
        </div>
      </form>
    </div>
  )
}