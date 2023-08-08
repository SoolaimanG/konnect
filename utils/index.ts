//For Small Re-useable Components
export const regexForUrls =
  /^(https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

export const regexForEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const regexForPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

export const regexForUsername = /[^a-zA-Z0-9]/;

//To Handle Copying
export const handleCopying = async (res: string | number) => {
  await window.navigator.clipboard.writeText(res as string).then(() => {});
};

//HTML VALUE FOR NEW USER
export const htmlDocument = (path: string) => {
  return `
  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <style>
    .header {
      background-image: url(https://i.ibb.co/284SBnJ/1691368361788-1.png);
      height: 6rem;
      width: 100%;
    }

    .link {
      all: unset;
      padding: 5px 10px;
      background-color: blue;
      color: white;
      border-radius: 7px;
    }

    .ignore {
      color: red;
    }
  </style>
</head>

<body>
  <main>
    <div class="header"></div>
    <section>
      <h2>Welcome to Konnect! We are excited to have you as a part of our community.</h2>
      <br>
      <br>
      <div>
        <p>Konnect is a link aggregator web app that allows you to discover and share interesting links from around the
          web. With Konnect, you can connect with like-minded individuals and explore a wide range of topics.</p>

        <strong>
          <i>To get started, please click the button below to verify your account:</i>
        </strong>

        <br />
        <br />
        <a href='http://localhost:3000/auth/verify-account/${path}' class="link">Verify Account</a>
        <br />
        <br />

        <b>By verifying your account, you will have access to all the features and functionalities of Konnect.</b>
        <br /><br />
        <strong class="ignore">If you did not sign up for a Konnect account, please ignore this email.</strong>
        <br /><br />
        If you have any questions or need assistance, feel free to reach out to our support team at
        <strong>suleimaangee@gmail.com</strong>.
        <br />
        <h4>Happy Konnecting!</h4>

        Best regards,
        The Konnect Team
      </div>

    </section>
  </main>
</body>

</html>`;
};

export const resetPasswordHtml = (path: string) => {
  return `
  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <style>
    .link {
      all: unset;
      padding: 7px 10px;
      background-color: blue;
      border-radius: 7px;
      color: white;
    }

    span {
      color: blue;
    }
  </style>
</head>

<body>
  <h2>
    Reset your konnect password
  </h2>
  <div>

    <b> We hope this email finds you well. We wanted to inform you that a recent request has been initiated to reset
      your <span>Konnect</span> account. This is the reason behind the receipt of this message.</b>

    <p>Your security is our utmost priority. If you did not request this action, we strongly recommend taking immediate
      steps to secure your account. We advise you to change your password and review any recent account activities for
      any signs of unauthorized access.</p>
    <p>If you are indeed the one who initiated the reset, you can disregard this email. If not, please don't hesitate to
      reach out to our support team for assistance. We're here to help you ensure the safety and integrity of your
      account.

    </p>
    <strong>Thank you for choosing <span>Konnect</span> for your online connectivity needs</strong>
    <br />
    <br />

    <a class="link" href="http://localhost:3000/auth/reset-password/${path}">
      Click to reset password
    </a>
  </div>
</body>

</html>
  `;
};

export const resetSuccessful = () => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333333;
    }

    p {
      color: #777777;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Password Reset Successful</h1>
    <p>We are writing to inform you that your password reset request was successful. Your account password has been
      updated as requested.</p>
    <p>If you initiated this password reset, you can now log in to your account using your new password. Please ensure
      you keep your password secure and do not share it with anyone.</p>
    <p>If you did not request this password reset, or if you have any concerns about your account security, please
      contact our support team immediately for assistance.</p>
    <p>Thank you for using our services.</p>
    <p>Best regards,<br>Konnect Team</p>
  </div>
</body>

</html>`;
};
