import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import headerImg2 from "../assets/img/WhatsApp Image 2024-07-03 at 00.50.40_63d62634.jpg";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              This portfolio showcases my ability to: <br></br>
              <br></br>
              <br></br>
              1️⃣Design user interfaces UI and user experiences UX that are both
              <br></br>
              aesthetically pleasing and easy to navigate.<br></br> <br></br>
              2️⃣Develop responsive and high-performing web applications<br></br>
              using modern technologies.<br></br> <br></br>3️⃣Utilize the power
              of Flutter to design and develop cross-platform<br></br> mobile
              applications.
              <br></br>
              <br></br>
              Let's collaborate to bring your next project to fruition.
              {/* Brought
              you by<br></br> & wait for more */}
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <div className="me">
            <img src={headerImg2} alt="Header Img" className="i" />
          </div>
          {/* <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button> */}
          {/* </div>
            </form>
          </Col> */}
        </Row>
      </div>
    </Col>
  );
};
