# MountainWave Messenger App

This Repository contains the code for MountainWave Messenger Application.

## Deployed Link:

https://mountainwave-messenger.onrender.com/

## Features

- 🌟 Tech stack: NodeJs + ExpressJs + MongoDB + ReactJs + Socket.io + TailwindCSS + Daisy UI
- 🔒 Encryption for Messages
- 🎃 Authentication && Authorization with JWT
- 👾 Real-time messaging with Socket.io
- 🚀 Online user status (Socket.io and React Context)
- 👌 Global state management with Zustand
- 🐞 Error handling both on the server and on the client

## Screenshots

![App Screenshot](https://i.ibb.co/xXX98xJ/mountain.png)

![Encrypted Messages Proof](https://i.ibb.co/kxPbqBx/encrypted.png)

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
