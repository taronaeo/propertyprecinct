import { ReactFragment, useCallback } from 'react';

import { LinearCategories } from './types/Categories';
import templateFTT from './templates/ftt';

import Button from './components/Button';
import PictorialUploadCard from './components/PictorialUploadCard';

type Iteration = [string, LinearCategories];

const App: React.FC = () => {
  const recurse = useCallback(([category, items]: Iteration): ReactFragment => {
    if (!Array.isArray(items))
      return Object.entries(items).map(([subcategory, iterable]) =>
        recurse([`${category}.${subcategory}`, iterable])
      );

    return items.map(({ counted = true, ...props }, count) => {
      const id = `${category}.${count + 1}`;
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

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-4xl font-extrabold'>PropertyPrecinct</h1>

      <div className='mb-4 grid gap-4 grid-cols-2'>
        {Object.entries(templateFTT).map(recurse)}

        {/* <div className='bg-yellow-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-red-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-green-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-purple-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-orange-300 rounded-xl xs:h-auto aspect-1'></div> */}
      </div>

      <h1 className='mb-4 text-4xl font-bold'>Report Actions</h1>

      <div className='mb-2 grid gap-4 grid-cols-2'>
        <Button color='green'>Save Report</Button>
        <Button color='red'>Cancel</Button>
      </div>
    </div>
  );
};

export default App;
