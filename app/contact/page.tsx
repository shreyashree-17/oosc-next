"use client"
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: '' }); // Clear validation error on input change
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let errors = validateForm();
    if (Object.values(errors).some((error) => error)) {
      setFormErrors(errors);
      console.log('Form has errors:', errors);
    } else {
      console.log('Form submitted successfully:', formData);
      // Handle form submission logic here, e.g., send data to backend
    }
  };

  const validateForm = () => {
    let errors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = 'Invalid phone number format';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const isValidEmail = (email: string) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    // Basic phone number validation regex (for demonstration)
    return /^\d{10}$/.test(phone);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Please fill the form below to contact us. You can also email us{' '}
              <a href="mailto:oosc@placeholder.com">here</a>.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name *"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger">{formErrors.name}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger">{formErrors.email}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone *"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger">{formErrors.phone}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message *"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                    <p className="help-block text-danger">{formErrors.message}</p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button type="submit" className="btn btn-xl">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
