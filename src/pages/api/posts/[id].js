import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';

export default async function handler(req, res) {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'DELETE') {
    await Post.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Usunięto post' });
  }

  if (req.method === 'PUT') {
    const { title, description, image } = req.body;
    const updated = await Post.findByIdAndUpdate(id, { title, description, image }, { new: true });
    return res.status(200).json(updated);
  }

  res.status(405).end();
}
