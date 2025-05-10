import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { nama, kelas } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'xennshou@gmail.com',
      pass: 'DAFAPUTRANAWAWI999' // Gunakan App Password dari Google, bukan password biasa
    }
  });

  const mailOptions = {
    from: 'xennshou@gmail.com',
    to: 'xennshou@gmail.com',
    subject: `Absen Baru dari ${nama}`,
    html: `<h2>Data Absen:</h2><p>Nama: ${nama}</p><p>Kelas: ${kelas}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Absen berhasil dikirim. Email terkirim ke admin.' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal kirim email.', error: err.toString() });
  }
}
