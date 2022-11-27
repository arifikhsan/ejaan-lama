import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const initialSentences = [
    'ini tidak seperti yang kamu bayangkan',
    'di sebelah sini, bung!',
    'seseorang sedang duduk duduk di lantai kemudian tembakan dihempaskan kearahnya',
    'petani bekerja giat gembira',
    'tenaga bekerja teguh bersatu',
    'nippon cahaya asia, nippon pelindung asia, nippon pemimpin asia',
  ];
  const initialSentence =
    initialSentences[Math.floor(Math.random() * initialSentences.length)];
  const [sentence, setSentence] = useState(initialSentence);
  const [oldSentence, setOldSentence] = useState('');

  const _convertSentence = () => {
    const newSentence = sentence
      .replace(/c/gi, 'tj')
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
    <div className='max-w-xl p-4 mx-auto'>
      <Head>
        <title>Ejaan Lama</title>
      </Head>
      <h1 className='text-4xl font-bold text-green-500'>
        Ubah kalimat biasa menjadi ejaan lama
      </h1>
      <div>
        <textarea
          className='w-full h-64 p-2 mt-4 border border-gray-300 rounded'
          placeholder='Masukkan kalimat disini'
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <textarea
          className='w-full h-64 p-2 mt-4 border border-gray-300 rounded'
          placeholder='Disini hasilnja boeng'
          value={oldSentence}
          readOnly
        />
      </div>
    </div>
  );
}
