const { sendMail } = require('../services/mail.service');

const sendConfirmationMail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Correo requerido' });
  }

  try {
    await sendMail(email);
    res.json({ message: '💖 Correo enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
};

module.exports = { sendConfirmationMail };
