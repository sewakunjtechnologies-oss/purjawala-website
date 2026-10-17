# Vercel email setup

Deploy this repository with the Framework Preset set to Other. No build command is needed; serve the project root. Vercel runs `api/inquiry.js` as a Node.js function and installs the dependencies in `package.json`.

In Vercel Project Settings > Environment Variables, add:

- `GMAIL_USER`: `purjawala@gmail.com`
- `GMAIL_APP_PASSWORD`: a Google App Password for this account, not the account's regular password.

Enable Google 2-Step Verification, then create an App Password at https://myaccount.google.com/apppasswords. Keep the value only in Vercel's environment settings. See https://support.google.com/mail/answer/185833.

Enable the variables for Production (and Preview if you need preview testing), then redeploy. Environment variable changes apply to new deployments.

Submit a real inquiry on the deployed site and check the inbox and spam folder of `purjawala@gmail.com`. The form only shows success after Gmail accepts the message; actual inbox delivery must be verified there. Replies go to the customer's email address.

For local email testing, use Vercel's development server with the same environment variables. A plain static HTTP server can display the site and PDF catalogs but cannot run the email function.

Before public launch, apply a rate limit to `/api/inquiry` in Vercel's Firewall if the endpoint attracts automated submissions. The form includes a honeypot and server-side validation.
