import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILER_MAIL,
    pass: process.env.MAILER_PASS,
  },
});
export const sendUserMail = (mail, name) => {
  try {
    const mailOptions = {
      from: process.env.MAILER_MAIL,
      to: mail,
      subject: "Automatic Reply",
      text: `We received your message at ${new Date().toDateString()}.
      Thank you ${name} for contating me. I will reply soon. 
      sincerely,
      Sabita Sitaula`,
      html: `We received your message at <b>${new Date().toDateString()}.</b><br/><br />
      Thank you <b>${name}</b> for contacting me. <br/><br/>I will reply soon.<br/><br />
      <i>Sincerely</i>,<br/>
      <i>Sabin Gautam</i><br/>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        throw new Error("err");
      }

      res.json({
        message: "Email successfully sent",
      });
    });
    return true;
  } catch (err) {
    return false;
  }
};

export const sendAdminMail = (name, email, message) => {
  try {
    const mailOptions = {
      from: process.env.MAILER_MAIL,
      to: process.env.ADMIN_MAIL,
      subject: "Automatic Received",
      text: `Received message at ${new Date().toDateString()}.
      Sender Name: ${name} , email Address: ${email},[ ${message} ]`,
      html: `Received message at <b>${new Date().toDateString()}.</b><br/><br />
    <b>Sender Name:</b> <i>${name},</i><br/><br/>
    <b>Email ID:</b> <i>${email},</i> <br/><br/>
     <b>Message:</b><br/>
     {<br/>
      ${message}
      <br/>
    }`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        throw new Error("err");
      }

      res.json({
        message: "Email successfully sent",
      });
    });
    return true;
  } catch (err) {
    return false;
  }
};
