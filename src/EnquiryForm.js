import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import abtimg from './images/inn1.webp';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await fetch('https://lgindustry.in/send-email.php',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.status === 'success') {
          alert('Form submitted successfully');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          alert(data.message || 'Failed to send email.');
        }
      } catch (err) {
        console.error(err);
        alert('There was an error submitting the form.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container my-5 mb-5">
              <img 
  src={abtimg} 
  alt="Company products" 
  className="img-fluid abtimg" 
  
/>
   
      <h2 className="text-center fw-semibold mt-5 mb-4">Enquiry Form</h2>

 
      <form onSubmit={handleSubmit} noValidate>
        {['name', 'email', 'subject', 'message'].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label text-capitalize">{field}</label>
            {field !== 'message' ? (
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
              />
            ) : (
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              />
            )}
            {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
          </div>
        ))}
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default EnquiryForm;



