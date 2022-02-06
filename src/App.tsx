import { ReactFragment } from 'react';
import { Categories, CardProps } from './types/Categories';

import Button from './components/Button';
import PictorialUploadCard from './components/PictorialUploadCard';

type Items = [string, CardProps[] | { [subcategory: string]: CardProps[] }];

const App: React.FC = () => {
  const categories: Categories = {
    overviews: [
      {
        label: 'Overview of Shop Front (w/ LQ)',
        importance: 'required',
      },
      {
        label: 'Overview of Shop Front (w/o LQ)',
        importance: 'required',
      },
      {
        label: 'Overview of Shop Rear (Left View)',
        importance: 'required',
      },
      {
        label: 'Overview of Shop Rear (Right View)',
        importance: 'required',
      },
    ],
    signboards: [
      { label: 'Store Signboard', importance: 'required' },
      { label: 'Store Signboard' },
    ],
    corridors: [
      {
        label: 'Common Corridor (Left View)',
        importance: 'required',
      },
      {
        label: 'Common Corridor (Right View)',
        importance: 'required',
      },
    ],
    odas: [
      { label: 'ODA (Left View)', importance: 'required' },
      { label: 'ODA (Right View)', importance: 'required' },
    ],
    tradingareas: {
      rooms: [{ label: 'Trading Area Room' }],
      toilets: [{ label: 'Trading Area Toilet' }],
      firedoors: [{ label: 'Trading Area Firedoor' }],
    },
    staircases: [{ label: 'Staircase' }],
    lqs: [{ label: 'Living Quarters' }],
    aircons: [],
    remarks: [],
    extras: [],
  };

  const recurseCategories = ([cat, items]: Items): ReactFragment => {
    if (!Array.isArray(items))
      return Object.entries(items).map(([subcat, iterable]) =>
        recurseCategories([`${cat}.${subcat}`, iterable])
      );

    return items.map(({ ...props }, count) => {
      const id = `${cat}.${count + 1}`;
      const counter = cat === 'overviews' ? '' : count + 1;

      return (
        <PictorialUploadCard
          {...props}
          key={id}
          id={id}
          label={`${props.label} ${counter}`.trimEnd()}
        />
      );
    });
  };

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-4xl font-extrabold'>PropertyPrecinct</h1>

      <div className='mb-4 grid gap-4 grid-cols-2'>
        {Object.entries(categories).map(recurseCategories)}

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
