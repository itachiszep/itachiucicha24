export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
};

import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';

export default async function handler(req, res) {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await Post.findByIdAndDelete(id);
      return res.status(200).json({ message: 'Usunięto post' });
    } catch (error) {
      console.error('Błąd DELETE:', error);
      return res.status(500).json({ error: 'Błąd przy usuwaniu posta' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { title, description, image } = req.body;
      const updated = await Post.findByIdAndUpdate(
        id,
        { title, description, image },
        { new: true }
      );
      return res.status(200).json(updated);
    } catch (error) {
      console.error('Błąd PUT:', error);
      return res.status(500).json({ error: 'Błąd przy aktualizacji posta' });
    }
  }

  res.status(405).json({ error: 'Metoda niedozwolona' });
}