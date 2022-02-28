import { useFormContext } from 'react-hook-form';
import { useCallback, ReactFragment } from 'react';

import fttTemplate from '../templates/ftt';
import { LinearCategories } from '../types/Categories';

import Button from '../components/Button';
import PictorialUploadCard from '../components/PictorialUploadCard';

type Iteration = [string, LinearCategories];

const UploadReport: React.FC = () => {
  const { reset, handleSubmit } = useFormContext();

  const onReset = useCallback(() => reset(fttTemplate), []);
  const onSubmit = useCallback((data) => console.log(data), []);

  const recurse = useCallback(([category, items]: Iteration): ReactFragment => {
    if (!Array.isArray(items))
      return Object.entries(items).map(([subcategory, iterable]) =>
        recurse([`${category}.${subcategory}`, iterable])
      );

    return items.map(({ ...props }, count) => (
      <PictorialUploadCard
        {...props}
        key={`${category}.${count}`}
        id={`${category}.${count}`}
        label={props.label}
      />
    ));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4 grid gap-4 grid-cols-2'>
        {Object.entries(fttTemplate).map(recurse)}

        {/* <div className='bg-yellow-300 rounded-xl xs:h-auto aspect-1'></div>
            <div className='bg-red-300 rounded-xl xs:h-auto aspect-1'></div>
            <div className='bg-green-300 rounded-xl xs:h-auto aspect-1'></div>
            <div className='bg-purple-300 rounded-xl xs:h-auto aspect-1'></div>
            <div className='bg-orange-300 rounded-xl xs:h-auto aspect-1'></div> */}
      </div>

      <h1 className='mb-4 text-4xl font-bold'>Report Actions</h1>

      <div className='mb-2 grid gap-4 grid-cols-2'>
        <Button color='green' type='submit'>
          Save Report
        </Button>

        <Button color='red' type='reset' onClick={onReset}>
          Reset Report
        </Button>
      </div>
    </form>
  );
};

export default UploadReport;
