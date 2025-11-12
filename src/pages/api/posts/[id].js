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