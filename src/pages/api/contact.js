export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    replyTo: req.body.email,
    auth:
    {
      user: 'audiosuldeminasmg@gmail.com',
      pass: 'thebpzrtscuaytmt',
    },
    secure: true,
  })
  const mailData = {
    from: 'audiosuldeminasmg@gmail.com',
    to: 'audiosuldeminasmg@gmail.com',
    subject: `Menssagem de contato de ${req.body.name}`,
    text: "Telefone:" + req.body.tel+ " |Enviado por: " + req.body.email,
    html: `<div>
      <p><b>Telefone: </b>${req.body.tel}</p>
      </div><p><b>Enviado por: </b>${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
  res.send()
}