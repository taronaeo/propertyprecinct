import PictorialUploadCard from './components/PictorialUploadCard';

const App: React.FC = () => {
  return (
    <div className='p-4 grid gap-4 xs:grid-cols-2'>
      <h1 className='text-4xl font-extrabold col-span-2'>PropertyPrecinct</h1>

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
      <PictorialUploadCard
        id='test3'
        label='Corridor (Left View)'
        importance='optional'
      />
      <PictorialUploadCard
        id='test4'
        label='Corridor (Right View)'
        importance='optional'
      />
      <PictorialUploadCard
        id='test5'
        label='ODA (Wide View)'
        importance='optional'
      />
      <PictorialUploadCard
        id='test6'
        label='ODA (Left View)'
        importance='optional'
      />
      <PictorialUploadCard
        id='test7'
        label='ODA (Right View)'
        importance='optional'
      />
      <PictorialUploadCard
        id='test8'
        label='Trading Area (Photo 1)'
        importance='optional'
      />

      <div className='bg-yellow-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-red-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-green-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-purple-300 rounded-xl xs:h-auto aspect-1'></div>
      <div className='bg-orange-300 rounded-xl xs:h-auto aspect-1'></div>
    </div>
  );
};

export default App;
