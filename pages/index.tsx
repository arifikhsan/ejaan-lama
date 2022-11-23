import { useEffect, useState } from 'react';

export default function Home() {
  const [sentence, setSentence] = useState('Sebelah sini, bung!');
  const [oldSentence, setOldSentence] = useState('');

  const _convertSentence = () => {
    const newSentence = sentence
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
      <h1 className='text-4xl font-bold'>Ubah kalimat biasa menjadi ejaan lama</h1>
      <div>
        <textarea
          className='w-full mt-4 h-64 p-2 border border-gray-300 rounded'
          placeholder='Masukkan kalimat disini'
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <textarea
          className='w-full mt-4 h-64 p-2 border border-gray-300 rounded'
          placeholder='Ini hasilnja boeng'
          value={oldSentence}
          readOnly
        />
      </div>
    </div>
  );
}
