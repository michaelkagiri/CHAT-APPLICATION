// pages/api/upload.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File, IncomingForm, Fields, Files } from 'formidable';
import { IncomingMessage } from 'http';

// Disable bodyParser to allow formidable to handle multipart form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

type FormidableParsed = {
  fields: Fields;
  files: Files;
};

function parseForm(req: IncomingMessage): Promise<FormidableParsed> {
  const form = new IncomingForm({
    uploadDir: 'public/uploads',
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { files } = await parseForm(req);

    const file = (files.file as File[])[0];
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = file.newFilename;
    return res.status(200).json({ url: `/uploads/${filePath}` });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Upload failed' });
  }
}
