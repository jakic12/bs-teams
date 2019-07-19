import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'react-bootstrap/ModalHeader'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CookiePolicy({setShow, show}) {

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} style={{overlay: {zIndex: 5000}, zIndex:5000}}>
        <Modal.Header closeButton>
          <Modal.Title>Politika piškotkov</Modal.Title>
        </Modal.Header>
        <Modal.Body><p><b>1. skupina:</b> so obvezni za brezhibno delovanje strani. Za te piškotke nam v skladu z uredbo GDPR ni potrebno dobiti vaše privolitve.</p>

                    <p><b>2. skupina:</b> so piškotki, s pomočjo katerih analiziramo obisk naše spletne strani. Zajem podatkov je v anonimni obliki. Ta skupina piškotkov se samodejno naloži in nam v skladu z uredbo GDPR ni potrebno dobiti vaše privolitve.</p>

                    <p><b>3. skupina:</b> so piškotki za potrebe trženja in se uporabljajo za sledenje uporabnikom pri obisku različnih spletnih strani. Njihov namen je prikazovanje oglasov, ki so primerni in zanimivi za posameznega uporabnika, pa tudi preprečevanje prikazovanja oglasov, ki jih je uporabnik že videl. Ti podatki se zbirajo v neosebni obliki.</p></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CookiePolicy;