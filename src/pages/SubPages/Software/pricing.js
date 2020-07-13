import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="pricing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="title text-center mb-5">
                  <p className="text-uppercase text-muted mb-2 f-13 subtitle">
                    Contact us
                  </p>
                  <h3>Just Send Us a Messege</h3>
                  <p className="text-muted mt-3">
                    We will contact you with in 24 hour.
                  </p>
                  <div className="modal-body p-5">
                    <div className="custom-form">
                      <div id="message"></div>
                      <form
                        method="post"
                        action="php/contact.php"
                        name="contact-form"
                        id="contact-form"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mb-4">
                              <input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="Your Name..."
                              />
                            </div>
                            <div className="form-group mb-4">
                              <input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Your Email..."
                              />
                            </div>
                            <div className="form-group mb-4">
                              <input
                                name="subject"
                                id="subject"
                                type="text"
                                className="form-control"
                                placeholder="Your Subject..."
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                name="comments"
                                id="comments"
                                rows="4"
                                className="form-control"
                                placeholder="Your Message..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-sm-12 text-right">
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-custom"
                              value="Send Message"
                            />
                            <div id="simple-msg"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
