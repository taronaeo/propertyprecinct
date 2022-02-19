import { useFormContext } from 'react-hook-form';
import { useState, useEffect, HTMLAttributes, DetailedHTMLProps } from 'react';

import { PhotographIcon } from '@heroicons/react/outline';

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
  const { register, setValue } = useFormContext();

  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!image) return () => setPreview(undefined);

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result! as string;

      setPreview(result);
      setValue(`${id}.preview`, result);
    };
    reader.readAsDataURL(image);

    return () => reader.abort();
  }, [image]);

  const previewId = `${id}.preview`;
  const textboxId = `${id}.label`;

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
    `rounded-md border-none`,
    importance === 'required' ? 'focus:ring-red-300' : 'focus:ring-purple-300',
  ].join(' ');

  return (
    <div {...props} className='w-full h-full'>
      {!!preview ? (
        <img
          src={preview}
          alt='Image Preview'
          onDoubleClick={() => setPreview(undefined)}
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
            capture='environment'
            accept='.jpg, .jpeg, .png, .heic'
            className='sr-only'
            onChange={(evt) => setImage(evt.target.files![0])}
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
