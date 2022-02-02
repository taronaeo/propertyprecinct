import Button from './components/Button';
import PictorialUploadCard from './components/PictorialUploadCard';

const App: React.FC = () => {
  return (
    <div className='p-4'>
      <h1 className='mb-4 text-4xl font-extrabold'>PropertyPrecinct</h1>

      <div className='mb-4 grid gap-4 grid-cols-2'>
        <PictorialUploadCard
          id='test1'
          label='Overview - Front of Shop (w/ LQ)'
          importance='required'
        />
        <PictorialUploadCard
          id='test2'
          label='Overview - Front of Shop (w/o LQ)'
          importance='required'
        />
        <PictorialUploadCard id='test3' label='Corridor (Left View)' />
        <PictorialUploadCard id='test4' label='Corridor (Right View)' />
        <PictorialUploadCard id='test6' label='ODA (Left View)' />
        <PictorialUploadCard id='test7' label='ODA (Right View)' />
        <PictorialUploadCard id='test8' label='Trading Area (Photo 1)' />

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
