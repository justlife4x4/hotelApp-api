// const EMAIL_SETTINGS = {
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     // port: 587,
//     // secure: false,
//     auth: {
//       user: process.env.EMAIL_ADDRESS,
//       pass: process.env.EMAIL_PASSWORD
//     }
// }

const EMAIL_SETTINGS = {
  host: 'smtp.googlemail.com', // Gmail Host
  port: 465, // Port
  secure: true, // this is true as port is 465
  auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
  }
}

module.exports = {EMAIL_SETTINGS}