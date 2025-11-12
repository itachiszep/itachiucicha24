import connectToDatabase from '@/lib/mongoose';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    res.status(200).json({ message: 'Połączono z MongoDB!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Błąd połączenia z MongoDB' });
  }
}
