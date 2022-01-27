import { useState, useEffect } from 'react';
import { PhotographIcon } from '@heroicons/react/outline';

const App: React.FC = () => {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!image) return () => setPreview(undefined);

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(image);

    return () => reader.abort();
  }, [image]);

  return (
    <div className='p-4 grid gap-4 xs:grid-cols-2'>
      <h1 className='text-4xl font-extrabold col-span-2'>PropertyPrecinct</h1>

      {preview ? (
        <img
          src={preview}
          alt='Preview'
          className='w-full h-full aspect-1 object-scale-down rounded-xl border-2 border-dotted border-blue-300'
          onClick={() => setPreview(undefined)}
        />
      ) : (
        <div className='rounded-xl border-4 border-dashed border-gray-400 bg-blue-300 shadow-sm'>
          <label
            htmlFor='camera'
            className='w-full h-full flex flex-col align-middle items-center justify-center'>
            <PhotographIcon className='w-10 h-10 text-gray-500' />
            <h1 className='font-medium text-xl text-gray-700'>Take Photo</h1>
          </label>

          <input
            id='camera'
            type='file'
            capture='environment'
            accept='.jpg, .jpeg, .png, .heic'
            className='sr-only'
            onChange={(evt) => setImage(evt.target.files![0])}
          />
        </div>
      )}

      <div className='bg-yellow-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-red-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-green-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-purple-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-orange-300 rounded-xl xs:h-auto aspect-1'></div>
    </div>
  );
};

export default App;
