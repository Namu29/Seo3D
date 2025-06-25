import dbConnect from '../../src/utils/dbConnect';
import Subscriber from '../../src/models/Subscriber';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    await dbConnect();

    // Verificar si ya existe
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(200).json({ message: 'Ya estás suscrito a nuestro newsletter' });
    }

    // Crear nuevo suscriptor
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Enviar email de confirmación (opcional)
    await sendConfirmationEmail(email);

    return res.status(201).json({ message: '¡Gracias por suscribirte! Te hemos enviado un email de confirmación.' });
  } catch (error) {
    console.error('Error al guardar suscriptor:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Función para enviar email de confirmación
async function sendConfirmationEmail(email) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Tecno3D Hub" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Confirmación de suscripción',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4361ee;">¡Gracias por suscribirte!</h2>
        <p>Has sido añadido a nuestra lista de newsletter de impresión 3D.</p>
        <p>Recibirás nuestras últimas guías, comparativas y ofertas especiales.</p>
        <p>Si no solicitaste esta suscripción, por favor ignora este mensaje.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 0.9em; color: #777;">
          Tecno3D Hub - La guía definitiva de impresión 3D en España<br>
          <a href="https://seo3d.netlify.app" style="color: #4361ee;">https://seo3d.netlify.app</a>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error enviando email de confirmación:', error);
  }
}