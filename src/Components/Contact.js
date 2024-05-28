import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Contact.css'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dbc1c4d1-04e6-4393-89e9-dff62e4fc072");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contactContainer'>
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className='lblHead'>Name</Form.Label>
        <Form.Control placeholder="Your name..." type="text" name="name" required />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className='lblHead'>Email</Form.Label>
          <Form.Control type="email" placeholder="you@example.com" name="email" required/>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className='lblHead'>Message</Form.Label>
        <Form.Control className='messageLbl' placeholder="Ask your question..." textarea name="message" required/>
      </Form.Group> 
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check  className='lblHead'type="checkbox" label="Check me out" />
      </Form.Group>
      <Button button className='button' type="submit">
        Submit
      </Button>
    </Form>      
    </div>
  )
}
