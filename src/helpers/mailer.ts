import User from "@/models/userModels";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    const verifyEmailHTML = `<p>Click <a href="${
      process.env.DOMAIN
    }/verifyemail?token=${hashedToken}">here</a> to ${
      emailType === "VERIFY" ? "verify your email" : "reset your password"
    }
    or copy and paste the link below in your browser. <br> ${
      process.env.DOMAIN
    }/verifyemail?token=${hashedToken}
    </p>`;

    const forgotPasswordHTML = `<p>Click <a href="${
      process.env.DOMAIN
    }/forgotpassword?token=${hashedToken}">here</a> to ${
      emailType === "VERIFY" ? "verify your email" : "reset your password"
    }
    or copy and paste the link below in your browser. <br> ${
      process.env.DOMAIN
    }/forgotpassword?token=${hashedToken}
    </p>`;

    // create a hased token

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MIALTRAP_USER_KEY,
        pass: process.env.MIALTRAP_PASSWORD_KEY,
      },
    });

    const mailOptions = {
      from: "ridam@ridam.ai",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: emailType === "VERIFY" ? verifyEmailHTML : forgotPasswordHTML,
    };

    const mailResponse = await transport.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
