// pages/api/upload.ts
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm({ uploadDir: 'public/uploads', keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Upload failed' });

    const file = files.file[0];
    const filePath = file.newFilename;
    res.status(200).json({ url: `/uploads/${filePath}` });
  });
}
