import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer page-footer">
      <div className="row ">
        <div className="col-md-2 ">
          <center>
            <h5 className="mb-2 pb-2">North India Cities</h5>
            <ul className="list-unstyled">
              <li>Delhi</li>
              <li>Jaipur</li>
              <li>Chandigarh</li>
              <li>Lucknow</li>
            </ul>
          </center>
        </div>
        <div className="col-md-2">
          <center>
            <h5 className="mb-2 pb-2">West India Cities</h5>
            <ul className="list-unstyled">
              <li>Mumbai</li>
              <li>Ahmedabad</li>
              <li>Pune</li>
              <li>Goa</li>
            </ul>
          </center>
        </div>
        <div className="col-md-2">
          <center>
            <h5 className="mb-2 pb-2">South India Cities</h5>
            <ul className="list-unstyled">
              <li>Bengaluru</li>
              <li>Chennai</li>
              <li>Hyderabad</li>
              <li>Kochi</li>
            </ul>
          </center>
        </div>

        <div className="col-md-6">
          <center>
            <h5 className="mt-4 mb-4">Find us on:</h5>
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item mx-2">
                <a
                  className="btn-floating btn-fb text-white "
                  href="https://www.facebook.com/"
                >
                  <FaFacebook size="2.8rem" />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  className="btn-floating btn-tw text-white"
                  href="https://www.twitter.com/"
                >
                  <FaTwitter size="2.8rem" />
                </a>
              </li>
              <li className="list-inline-item  mx-2 ">
                <a
                  className="btn-floating btn-gplus text-white"
                  href="https://www.gplus.com/"
                >
                  <FaGooglePlus size="2.8rem" />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  className="btn-floating btn-li text-light"
                  href="https://www.linkedin.com/"
                >
                  <FaLinkedin size="2.8rem" />
                </a>
              </li>
            </ul>
          </center>
        </div>
      </div>

      <div className="text-center py-3" style={{ fontSize: "1.1 rem " }}>
		<strong>VIT UNIVERSITY ,Bhopal</strong> 
        @Suvidha, All rights reserved
      </div>
    </div>
  );
}

export default Footer;
