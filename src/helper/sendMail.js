import nodemailer from "nodemailer";

export const sendMail = (mail) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "66cb56e0ee5ad9",
        pass: "a08e5c85581ecb",
      },
    });

    const mailOptions = {
      from: '"Test server" smtp@gmail.com',
      to: mail,
      subject: "Email test",
      text: "This is to test the mailtrap",
    };
    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        throw new Error("err");
      }
      console.log("Info: ", info);
      res.json({
        message: "Email successfully sent",
      });
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
