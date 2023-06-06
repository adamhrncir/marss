# MARSS

Marss is a minimalistic Free and Open Source Software built on top of NextJS, that helps you get the news that you need!

The app primairly focuses on being self-hosted.

# deployment

to deploy the app, you have to:

Linux:
- install NodeJS LTS (18.x)
- git clone `https://github.com/adamhrncir/marss.git`
- npm install
- set the `NEXTAUTH_SECRET` variable to a random string. Preferably by using `openssl rand -base64 32`
- prisma npx generate
- prisma npx migrate dev --name init
- npm run dev

Windows:
- We do not support the monopoly of Billy Gates :)
- Who hosts their website on windows?
