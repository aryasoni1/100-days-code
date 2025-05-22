Here are your notes in `.md` (Markdown) format for **Email Templates**:

---

# 📧 Email Templates

Email templates are pre-designed HTML structures used to send consistent, styled, and responsive messages — especially for transactional emails like password resets, welcome emails, and receipts.

---

## ✉️ Use Cases

* **Password Reset**
* **Welcome Email**
* **Account Activation**
* **Invoice or Receipt**
* **Notifications & Alerts**

---

## 🔧 Inline HTML for Transactional Emails

### ✅ Why Inline Styles?

* Most email clients (like Gmail, Outlook) strip external styles.
* Use inline `style=""` attributes for maximum compatibility.

### 🧱 Basic Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Password Reset</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 20px;">
            <tr>
              <td>
                <h2 style="color: #333;">Reset Your Password</h2>
                <p style="color: #555;">Click the button below to reset your password:</p>
                <a href="{{reset_link}}" style="display: inline-block; background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
                  Reset Password
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 20px; font-size: 12px; color: #aaa;">
                If you didn’t request this, you can ignore this email.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

---

## 🧩 Tips for Compatibility

* Avoid JavaScript, external fonts, and complex CSS.
* Use tables for layout instead of `div` and `flexbox`.
* Test emails in multiple clients (Gmail, Outlook, Apple Mail, etc.).

---

## 📬 Tools & Libraries

* **MJML** – Write semantic markup, convert to responsive HTML.
* **Maizzle** – Tailwind-based email framework.
* **Handlebars/EJS** – Inject dynamic values server-side (`{{name}}`, `{{reset_link}}`).
* **Nodemailer** – Send emails via SMTP or services like SendGrid.

---

## 📦 Sending with Node.js (Example)

```js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});

const mailOptions = {
  to: user.email,
  subject: 'Reset Your Password',
  html: renderTemplate('reset-password.ejs', { reset_link: resetURL }),
};

await transporter.sendMail(mailOptions);
```

---
