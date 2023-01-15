import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';

export const GetInTouch = ({ heading, message }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2v05zfb', 'template_o7vrss8', form.current, '0l5Qll1J4Z9xjC7jJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">{message}</p>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Name' name='user_name'/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='email' placeholder='Email' name='user_email'/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control type='text' placeholder='Subject' name='subject'/>
        </Form.Group>
        <Form.Group>
          <Form.Control as="textarea" rows={3} placeholder='Message'/>
        </Form.Group>
        <Form.Group>
          <div className='p-5'>
            <button type="submit" className="btn btn-outline-dark btn-lg" >Send</button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default GetInTouch;