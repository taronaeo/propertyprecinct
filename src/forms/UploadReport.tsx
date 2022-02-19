import { useFormContext } from 'react-hook-form';
import { useCallback, ReactFragment } from 'react';

import fttTemplate from '../templates/ftt';
import { LinearCategories } from '../types/Categories';

import Button from '../components/Button';
import PictorialUploadCard from '../components/PictorialUploadCard';

type Iteration = [string, LinearCategories];

let renderCount = 0;

const UploadReport: React.FC = () => {
  const { handleSubmit } = useFormContext();
  const onSubmit = useCallback((data) => console.log(data), []);

  const recurse = useCallback(([category, items]: Iteration): ReactFragment => {
    if (!Array.isArray(items))
      return Object.entries(items).map(([subcategory, iterable]) =>
        recurse([`${category}.${subcategory}`, iterable])
      );

    return items.map(({ counted = true, ...props }, count) => {
      const id = `${category}.${count}`;
      const counter = counted ? count + 1 : '';

      return (
        <PictorialUploadCard
          {...props}
          key={id}
          id={id}
          label={`${props.label} ${counter}`.trimEnd()}
        />
      );
    });
  }, []);

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderCount}

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

        <Button color='red' type='reset'>
          Reset Report
        </Button>
      </div>
    </form>
  );
};

export default UploadReport;
