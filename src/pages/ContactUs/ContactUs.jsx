import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <div
          className="container px-4 col-lg-9 rounded-4"
          style={{ border: '3px solid #181818' }}
        >
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-5 bg-contact-info">
              <div className="info">
                <h3 className="fs-1 m-0 p-0 lh-1 fw-bold">Get in Touch </h3>
                <p className="mt-1 fw-medium" style={{ color: '#AAAAAA' }}>
                  Please fill the form for general enquiries
                </p>
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>India Entity: </h4>
                    <p>Hyderabad, Telangana</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>UAE Entity: </h4>
                    <p>Dubai, UAE</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>info@dwansys.ai</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+91 9014986761</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 bg-contact-form">
              <form role="form" className="contact-form">
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
                      placeholder="Your Email"
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
                      id="name"
                      placeholder="Company"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="Phonenumber"
                      id="email"
                      placeholder="Phone Number"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
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
                  <button type="submit" className="rounded-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
