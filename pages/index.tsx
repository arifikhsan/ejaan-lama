import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const initialSentences = [
    'ini tidak seperti yang kamu bayangkan',
    'disebelah sini, bung!',
    'seseorang sedang duduk duduk di lantai kemudian tembakan dihempaskan kearahnya',
    'petani bekerja giat gembira',
    'tenaga bekerja teguh bersatu'
  ];
  const initialSentence =
    initialSentences[Math.floor(Math.random() * initialSentences.length)];
  const [sentence, setSentence] = useState(initialSentence);
  const [oldSentence, setOldSentence] = useState('');

  const _convertSentence = () => {
    const newSentence = sentence
      .replace(/w*i\b/gi, 'ie')
      .replace(/j/gi, 'dj')
      .replace(/u/gi, 'oe')
      .replace(/y/gi, 'j');
    setOldSentence(newSentence);
  };

  // watch variable "sentence" change
  useEffect(() => {
    _convertSentence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentence]);

  return (
    <div className='max-w-xl mx-auto p-4'>
      <Head>
        <title>Ejaan Lama</title>
      </Head>
      <h1 className='text-4xl font-bold text-green-500'>
        Ubah kalimat biasa menjadi ejaan lama
      </h1>
      <div>
        <textarea
          className='w-full mt-4 h-64 p-2 border border-gray-300 rounded'
          placeholder='Masukkan kalimat disini'
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <textarea
          className='w-full mt-4 h-64 p-2 border border-gray-300 rounded'
          placeholder='Disini hasilnja boeng'
          value={oldSentence}
          readOnly
        />
      </div>
    </div>
  );
}
