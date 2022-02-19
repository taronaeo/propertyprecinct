import { useFormContext } from 'react-hook-form';
import { PhotographIcon } from '@heroicons/react/outline';
import { useState, useEffect, HTMLAttributes, DetailedHTMLProps } from 'react';

import { storageApi } from '../firebase';

interface PictorialUploadCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  label: string;
  importance?: 'optional' | 'required';
}

const PictorialUploadCard: React.FC<PictorialUploadCardProps> = ({
  id,
  label,
  importance = 'optional',
  className = '',
  ...props
}) => {
  const textboxId = `${id}.label`;
  const previewId = `${id}.preview`;

  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const { register, setValue, resetField } = useFormContext();

  useEffect(() => {
    if (!image || !image.name) return;

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const result = reader.result as string;
      const { ref } = await storageApi.writePreviewToTemp(result);
      const url = await storageApi.getPreviewUrl(ref);

      setPreview(url);
      setValue(previewId, url);
    };

    return () => reader.abort();
  }, [image]);

  const previewClassNames = [
    `w-full aspect-1 object-scale-down`,
    `rounded-xl border-4 border-dashed`,
    importance === 'required' ? 'border-red-300' : 'border-purple-300',
  ].join(' ');

  const cardClassNames = [
    `w-full aspect-1`,
    `rounded-xl border-4 border-dashed`,
    `flex flex-col align-middle items-center justify-center`,
    importance === 'required' ? 'border-red-300' : 'border-purple-300',
  ].join(' ');

  const inputClassNames = [
    `w-full resize-none`,
    `font-medium text-sm`,
    `border-none rounded-md`,
    `focus:ring-0`,
  ].join(' ');

  return (
    <div {...props} className='w-full h-full'>
      {!!preview ? (
        <img
          src={preview}
          alt={label}
          onDoubleClick={() => {
            resetField(id);
            setPreview(undefined);
          }}
          className={`${previewClassNames} ${className}`}
        />
      ) : (
        <div>
          <label
            htmlFor={previewId}
            className={`${cardClassNames} ${className}`}>
            <PhotographIcon className='w-10 h-10 text-gray-500' />
            <h1 className='font-medium text-xl text-gray-700'>Take Photo</h1>
          </label>

          <input
            id={previewId}
            type='file'
            className='sr-only'
            capture='environment'
            accept='.jpg, .jpeg, .png, .heic'
            onChange={(e) => setImage(e.target.files![0])}
          />
        </div>
      )}

      <textarea
        id={textboxId}
        className={inputClassNames}
        placeholder={label}
        {...register(textboxId, { value: label, required: true })}
      />
    </div>
  );
};

export default PictorialUploadCard;
export type { PictorialUploadCardProps };
