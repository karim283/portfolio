const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Form } = require("react-bootstrap");
const { Code } = require("react-bootstrap-icons");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kareememadaleen@gmail.com",
    pass: "",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    Form: name,
    to: "kareememadaleen@gmail.com",
    subject: "Contact from submission-portfolio",
    html: `<p>name: ${name} </p>
                <p>email: ${email} </p>
                <p>phone: ${phone} </p>
                <p>message: ${message} </p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ Code: 200, status: "message sent" });
    }
  });
});
