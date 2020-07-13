import React, { Component } from "react";

import featuresImg from "../../../images/soft-features-img.png";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-soft">
          <div className="container">
            <div className="row vertical-content">
              <div className="col-lg-6">
                <div className="soft-feautures-content pt-5 pb-5">
                  <div className="text-white">
                    <h4 className="mb-4">Unique and Creative Team </h4>
                    <p className="text-white-50 mb-4">
                      Our brand is comprised of Elastic and Script that reflects
                      our core business objectives. We are in this business to
                      enable our clients to become more agile (Elastic) in
                      responding to the constantly changing market dynamics. We
                      accomplish this by automating (Scrip) infrastructure
                      provisioning and application deployment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="">
                  <img
                    src={featuresImg}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
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
