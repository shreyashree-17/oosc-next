"use client"
import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    address: '',
    zip: '',
    city: '',
    org: '',
    position: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    type: '',
    address: '',
    zip: '',
    city: '',
    org: '',
    position: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      type: '',
      address: '',
      zip: '',
      city: '',
      org: '',
      position: '',
      email: '',
      phone: '',
    };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.type.trim()) {
      errors.type = 'Registration type is required';
    }

    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }

    if (!formData.zip.trim()) {
      errors.zip = 'Zip code is required';
    } else if (!isValidZip(formData.zip)) {
      errors.zip = 'Invalid zip code format';
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }

    if (!formData.org.trim()) {
      errors.org = 'Organisation is required';
    }

    if (!formData.position.trim()) {
      errors.position = 'Position is required';
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

  const isValidZip = (zip: string) => {
    // Basic zip code validation regex (only numbers)
    return /^\d+$/.test(zip);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Register for the Conference</h2>
            <div className="section-subheading text-muted" style={{color: "#c4c4c4", paddingBottom: "0", fontStyle:"italic"}}>
              <h4>How to register?</h4>
              <p style={{color: "#c4c4c4", padding: "0"}}>To register for the Opportunity Open Source Conference as either an Attendee or a Speaker, please fill out the appropriate form below. If you are registering as an Attendee, we will send you your invitation. If you are applying to be a Speaker, we will contact you shortly. You may need to fill out the form multiple times.<br/><br/></p>
            </div>
            
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
                    <select
                      className="form-control"
                      id="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                      
                    >
                      <option value="" disabled style={{ margin: "30px" }}>Select Registering As</option>
                      <option>Attendee</option>
                      <option>Speaker</option>
                    </select>
                    <p className="help-block text-danger">{formErrors.type}</p>
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
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Address *"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger">{formErrors.address}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Zip *"
                      id="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger">{formErrors.zip}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your City *"
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger">{formErrors.city}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Organisation *"
                      id="org"
                      value={formData.org}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger">{formErrors.org}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Position/Program *"
                      id="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger">{formErrors.position}</p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button type="submit" className="btn btn-xl">
                    Submit
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

export default Registration;
