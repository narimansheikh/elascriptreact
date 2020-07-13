import React, { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="about-box text-center p-4">
                  <div className="about-icon mb-3">
                    <i className="pe-7s-exapnd2 text-custom h1"></i>
                  </div>
                  <div className="about-desc">
                    <h5 className="mb-3 f-18">Cloud Migration Services</h5>
                    <p className="text-muted mb-0">
                      Cloud providers manage the servers, storage, and
                      networking behind the scene to allow developers focus on
                      solving business problems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-box text-center p-4">
                  <div className="about-icon mb-3">
                    <i className="pe-7s-share text-custom h1"></i>
                  </div>
                  <div className="about-desc">
                    <h5 className="mb-3 f-18">Serverless Development</h5>
                    <p className="text-muted mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-box text-center p-4">
                  <div className="about-icon mb-3">
                    <i className="pe-7s-monitor text-custom h1"></i>
                  </div>
                  <div className="about-desc">
                    <h5 className="mb-3 f-18">
                      Content Delivery Network (CDN)
                    </h5>
                    <p className="text-muted mb-0">
                      All Web applications are accessible globally through World
                      Wide Web, but not all of them perform the same especially
                      when the user is few thousand miles away from the Web
                      server.
                    </p>
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

export default AboutUs;
