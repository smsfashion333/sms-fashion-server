import nodemailer from "nodemailer";
import { otpEmailTemplate } from "./otpEmailTemplate";
import { adminOrderPlacedEmailTemplate } from "./orderConfirmEmailTemplate";

export const sendEmail = async (payload: {
  to: string;
  subject: string;
  text: string;
  orderId?: string;
  otp?: string;
  type?: string;
}) => {
  const { to, subject, text, orderId, otp, type = "otp" } = payload;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "dev.tariqulislam88@gmail.com",
        pass: process.env.GOOGLE_APP_PASS,
      },
    });
    const info = await transporter.sendMail({
      from: '"Crab Fashion" <dev.tariqulislam88@gmail.com>',
      to: to,
      subject: subject,
      text: text,
      html:
        type === "otp"
          ? otpEmailTemplate(orderId || "", otp || "", subject, text)
          : adminOrderPlacedEmailTemplate(orderId || "", text),
    });

    return info;
  } catch (err: any) {
    console.log("Error sending email:", err);
    throw err; // Consider throwing error for better error handling
  }
};
