import React from 'react';
import '../styles/contactForm.scss';
import '../styles/shared.scss';

export default () => {
  return (
    <div className='container'>
      <div>
        <h1 className='bigLightTitle'>Kontaktirajte nas</h1>
      </div>
      <form action='#' method='POST'>
        <div className='formBlock'>
          <input className='fieldShort' type='text' name='name' placeholder='IME'/>
          <input className='fieldShort' type='text' name='surname' placeholder='PRIIMEK'/>
        </div>
        <div className='formBlock'>
        <input className='fieldLong' type='text' name='phone' placeholder='TELEFON'/>
        </div>
        <div className='formBlock'>
          <input className='fieldArea' type='text' name='message' placeholder='SPOROCILO'/>
        </div>
        <input className='submitButton' type='submit' value='SEND'/>
      </form>
    </div>
  )
}