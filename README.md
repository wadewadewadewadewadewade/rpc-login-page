This is a coding chalange example reconstruction of the page at https://app.rockpapercoin.com/Login

On submission of the form, the form data will be output into the console, and also sent back to an API endpoint on the server. That response will always be a 401-unauthorized so I can show the server-side validation error.

## Caviats:

The email and password fields are required, and the email address is validated via a regex borrowed from https://emailregex.com/, but there is no minimum/maximum password length enforced.

Typically login pages don't always validate these field meta-data as they validate the email/password server-side, and that server-side validation wil catch all fo the rest of the validation errors. They save client-side validation like this for "sign up" pages. But some client-side validation is my preference as it saves the user a server round-trip.

## Build notes

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Also, `sass` was added to allow for sass/scss stylesheets, and uses react-hook-form. All pages/components are written in Typescript.


## Deployed on Vercel

This is deployed on the [Vercel Platform](https://rpc-login-page.vercel.app/), the creators of Next.js. Sence it' a free account, it may not remain up on Vercel forever.
