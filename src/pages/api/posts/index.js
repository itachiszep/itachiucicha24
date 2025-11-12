import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const posts = await Post.find().sort({ createdAt: -1 });
      return res.status(200).json(posts);
    } catch (error) {
      console.error('Błąd GET:', error);
      return res.status(500).json({ error: 'Błąd przy pobieraniu postów' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { title, description, image } = req.body;

      if (!title || !description || !image) {
        return res.status(400).json({ error: 'Brakuje danych' });
      }

      const post = await Post.create({ title, description, image });
      return res.status(201).json(post);
    } catch (error) {
      console.error('Błąd POST:', error);
      return res.status(500).json({ error: 'Błąd przy dodawaniu posta' });
    }
  }

  res.status(405).json({ error: 'Metoda niedozwolona' });
}