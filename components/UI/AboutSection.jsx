import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
               The company itself is a very successful company.
                 Those who accuse him of pleasure and flattery are more worthy of labor
                 snacks I will come, the flexibility of the body at times, in the true search
                 for the pain of repudiation of the tender heart, let it be borne by the pain! Impedes
                 and let it not be at times like and similar to the very pain of the present
                 are.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> The customer is very smart
                   a lot
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> No cancellation fees, just full cash refunds
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> 10% discount, priority service and exclusive benefits
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> 5,500 locations in 170 countries
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
