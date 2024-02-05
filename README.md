# MountainWave Messenger App

MountainWave Messenger, a cutting-edge messaging chat app meticulously crafted using Node.js, React.js, MongoDB, and Socket.io. With a sleek and intuitive UI, users can engage in instant conversations effortlessly. What sets MountainWave apart is its robust security feature—every message is encrypted, ensuring a fortress of privacy for users. Additionally, MountainWave keeps users connected by displaying a live roster of online users, fostering a sense of real-time community. Elevate your messaging experience with MountainWave Messenger—where seamless communication meets top-notch security.

## Deployed Link:

https://mountainwave-messenger.onrender.com/

## Screenshots

Chat Page-

![App Screenshot](https://i.ibb.co/xXX98xJ/mountain.png)

Messages Encrypted in DB-

![Encrypted Messages Proof](https://i.ibb.co/kxPbqBx/encrypted.png)

## Features

- 🌟 Tech stack: NodeJs + ExpressJs + MongoDB + ReactJs + Socket.io + TailwindCSS + Daisy UI
- 🔒 Encryption for Messages (aes-256-cbc algorithm along with iv number spinoff & 32 bit key, making it almost impossible to decrypt)
- 🎃 Authentication && Authorization with JWT
- 👾 Real-time messaging with Socket.io
- 🚀 Online user status (Socket.io and React Context)
- 👌 Global state management with Zustand
- 🐞 Error handling both on the server and on the client

## Installation

Run Following commands to run this project-

```bash
  git clone https://github.com/pranav043/mountainwave-messenger.git
  cd mountainwave-messenger
  npm run build
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your config.env file

`PORT`: 5000

`MONGO_DB_URI`: "MONGO DB URL"

`JWT_SECRET`: "SecretKey"

`ENC_ALGO`: "aes-256-cbc"

`ENC_KEY`: "32-bit-key"
