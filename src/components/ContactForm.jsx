import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/contactForm.scss';
import '../styles/shared.scss';

const recaptchaRef = React.createRef();

export default ({style}) => {
  return (
    <div style={style} className='contactContainer'>
      <div>
        <h1 className='bigLightTitle'>Kontaktirajte nas</h1>
      </div>
      <form action='#' method='POST'>
        <div className='formBlock'>
          <input className='fieldLong' type='text' name='name' placeholder='IME'/>
        </div>
        <div className='formBlock'>
          <input className='fieldLong' type='text' name='surname' placeholder='PRIIMEK'/>
        </div>
        <div className='formBlock'>
          <input className='fieldLong' type='text' name='phone' placeholder='TELEFON'/>
        </div>
        <div className='formBlock'>
          <input className='fieldArea' type='text' name='message' placeholder='SPOROCILO'/>
        </div>
        <ReCAPTCHA
            sitekey="Your client site key"
            onChange={console.log}
        />
        <input className='submitButton round' type='submit' value='SEND'/>
      </form>
    </div>
  )
}