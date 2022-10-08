This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone This Repository:

```bash
git clone https://github.com/agungfir98/qti

```

go to the the directory and install the dependency:

```bash
cd qti
#then
npm install
#or
yarn add
```

when finished you can start development server bellow:

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

you can see the result in http://localhost:3000

to build:

```bash
npm run build
```

run production:

```bash
npm start
```

additional information.
Chart used in dashboard are from react-chartjs-2 and the data are randomly generated.
credential and accessToken are stored in localstorage with keys named creds; every page reload causes page to send get request to /auth/me to refreshed the token.
