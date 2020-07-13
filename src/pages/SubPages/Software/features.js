import React, { Component } from "react";
import img1 from "../../../images/features/img-1.png";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="title text-center mb-5">
                  <p className="text-uppercase text-muted mb-2 f-13 subtitle">
                    Elascript
                  </p>
                  <h3>We thrive on your business digital transformation.</h3>
                  <p className="text-muted mt-3">
                    Our broad range of capabilities helps you accelerate your
                    digital transformation while keeping your business
                    performing.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="features-img">
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <div className="soft-features-box p-4">
                    <div className="soft-features-icon float-left">
                      <i className="pe-7s-helm h1 mr-4 mt-3 text-custom"></i>
                    </div>
                    <div className="soft-features-desc">
                      <h5 className="f-18">Creative Design</h5>
                      <p className="text-muted mb-0">
                        We are developing solutions that transform your business
                      </p>
                    </div>
                  </div>
                  <div className="soft-features-box p-4">
                    <div className="soft-features-icon float-left">
                      <i className="pe-7s-vector h1 mr-4 mt-3 text-custom"></i>
                    </div>
                    <div className="soft-features-desc">
                      <h5 className="f-18">Agile methodology</h5>
                      <p className="text-muted mb-0">
                        We deliver managed IT services to optimize and modernize
                        mainframes, infrastructure, and cloud for clients.
                      </p>
                    </div>
                  </div>
                  <div className="soft-features-box p-4">
                    <div className="soft-features-icon float-left">
                      <i className="pe-7s-monitor h1 mr-4 mt-3 text-custom"></i>
                    </div>
                    <div className="soft-features-desc">
                      <h5 className="f-18">Cloud Elasticity</h5>
                      <p className="text-muted mb-0">
                        Our broad range of capabilities helps you accelerate
                        your digital transformation while keeping your business
                        performing.
                      </p>
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

export default Features;
