import { useFormContext } from 'react-hook-form';
import { PhotographIcon } from '@heroicons/react/outline';
import {
  useState,
  useEffect,
  useCallback,
  HTMLAttributes,
  DetailedHTMLProps,
} from 'react';

import { storageApi } from '../firebase';

interface PictorialUploadCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  label: string;
}

const PictorialUploadCard: React.FC<PictorialUploadCardProps> = ({
  id,
  label,
  className = '',
  ...props
}) => {
  const textboxId = `${id}.label`;
  const previewId = `${id}.preview`;
  const previewRefId = `${id}.previewRef`;

  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const { watch, register, setValue, resetField } = useFormContext();

  const watchPreview = watch(previewId);

  const resetCard = useCallback(() => {
    resetField(id);
    setPreview(undefined);
  }, []);

  useEffect(() => {
    if (!watchPreview) resetCard();
  }, [watchPreview]);

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
      setValue(previewRefId, `gs://${ref.bucket}/${ref.fullPath}`);
    };

    return () => reader.abort();
  }, [image]);

  const imageClassName = [
    `w-full aspect-1 object-scale-down`,
    `rounded-xl border-4 border-dashed border-red-300`,
    `flex flex-col align-middle items-center justify-center`,
  ].join(' ');

  const inputClassName = [
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
          onDoubleClick={resetCard}
          className={`border-green-300 ${imageClassName} ${className}`}
        />
      ) : (
        <div>
          <label
            htmlFor={previewId}
            className={`border-red-300 ${imageClassName} ${className}`}>
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
        className={inputClassName}
        placeholder={label}
        defaultValue={label}
        {...register(textboxId, { value: label, required: true })}
      />
    </div>
  );
};

export default PictorialUploadCard;
export type { PictorialUploadCardProps };
