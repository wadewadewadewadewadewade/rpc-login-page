This is a coding chalange example reconstruction of the page at https://app.rockpapercoin.com/Login

## Caviats:

The email and password fields are required, and the email address is validated via a regex borrowed from https://emailregex.com/, but there is no minimum/maximum password length enforced.

Typically login pages don't always validate these field meta-data as they validate the email/password server-side, and that server-side validation wil catch all fo the rest of the validation errors. They save client-side validation like this for "sign up" pages. But some client-side validation is my preference as it saves the user a server round-trip.

## Build notes

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Also, `sass` was added to allow for sass/scss stylesheets


## Deploied on Vercel

This is deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the creators of Next.js.
