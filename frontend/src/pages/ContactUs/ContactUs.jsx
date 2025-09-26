import './ContactUs.css';
import { useState } from 'react';

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: null, text: '' });

  const API_BASE = import.meta?.env?.VITE_API_BASE_URL || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const payload = {
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        company: String(formData.get('company') || '').trim() || null,
        phone: String(formData.get('phone') || '').trim() || null,
        subject: String(formData.get('subject') || '').trim(),
        message: String(formData.get('message') || '').trim(),
      };

      const res = await fetch(`${API_BASE}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json?.error?.message || 'Failed to submit');
      }
      // Optional: clear form on success
      form.reset();
      setFeedback({
        type: 'success',
        text: `Dear ${payload.name}, we have received your message. Our team will contact you shortly. Thank you ✅`,
      });
    } catch (err) {
      setFeedback({ type: 'error', text: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
     <section id="contact" className="contact row">
        <div
          className="container px-4 col-md-10 col-lg-9 rounded-4 contact-div"
          style={{ border: '3px solid #181818' }}
        > 

          <div className="row d-flex gy-5 gx-lg-5">
            <div className=" col-md-5 col-lg-5 bg-contact-info">
              <div className="info">
                <h3 className="fs-1 m-0 p-0 lh-1 fw-bold">Get in Touch </h3>
                <p className="mt-1 fw-medium" style={{ color: '#AAAAAA' }}>
                  Please fill the form for general enquiries
                </p>
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4 className='text-start'>India Entity: </h4>
                    <p>Hyderabad, Telangana</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4 className='text-start'>US Entity: </h4>
                    <p className='text-start'>Dallas, US</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4 className='text-start'>Email:</h4>
                    <p className='text-start'>info@dwansys.ai</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4 className='text-start'>Call:</h4>
                    <p className='text-start'>+91 9014986761</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-7 col-lg-7 bg-contact-form">
              <form role="form" className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter Your Bussiness Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="company"
                      className="form-control"
                      id="company"
                      placeholder="Enter Your Company"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Enter Phone Number"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control subject"
                    name="subject"
                    id="subject"
                    placeholder="Enter Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
                <div className="text-center m-4">
                  <button type="submit" className="rounded-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {feedback.text ? (
                    <div
                      className="mt-2"
                      style={{
                        color: feedback.type === 'success' ? '#16a34a' : '#dc2626',
                        fontWeight: 600,
                        textAlign: 'center',
                        backgroundColor: 'transparent',
                      }}
                    >
                      {feedback.text}
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>  
  );
};

export default ContactUs;
