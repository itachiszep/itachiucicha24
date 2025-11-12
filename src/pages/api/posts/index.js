export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
};

import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';
import fs from 'fs';
import formidable from 'formidable';

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
      const form = formidable({ multiples: false });
      const [fields, files] = await form.parse(req);

      const title = fields.title?.[0];
      const description = fields.description?.[0];
      const imageFile = files.image?.[0];

      if (!title || !description || !imageFile) {
        return res.status(400).json({ error: 'Brakuje danych' });
      }

      const imageBuffer = fs.readFileSync(imageFile.filepath);
      const imageBase64 = imageBuffer.toString('base64');
      const mimeType = imageFile.mimetype || 'image/jpeg';
      const image = `data:${mimeType};base64,${imageBase64}`;

      const post = await Post.create({ title, description, image });
      return res.status(201).json(post);
    } catch (error) {
      console.error('Błąd POST:', error);
      return res.status(500).json({ error: 'Błąd przy dodawaniu posta' });
    }
  }

  res.status(405).json({ error: 'Metoda niedozwolona' });
}