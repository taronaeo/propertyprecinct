import Button from './components/Button';
import PictorialUploadCard, {
  PictorialUploadCardProps,
} from './components/PictorialUploadCard';

type CardProps = Pick<PictorialUploadCardProps, 'id' | 'label' | 'importance'>;
interface Layout {
  overviews: CardProps[];
  signboards: CardProps[];
  corridors: CardProps[];
  odas: CardProps[];
  tradingarea: CardProps[];
  tradingrooms: CardProps[];
  tradingtoilets: CardProps[];
  tradingareadoors: CardProps[];
  staircases: CardProps[];
  lqs: CardProps[];
  aircons: CardProps[];
  remarks: CardProps[];
  extras: CardProps[];
}

const App: React.FC = () => {
  const layout: Layout = {
    overviews: [
      {
        id: 'w-lq',
        label: 'Overview of Shop Front (w/ LQ)',
        importance: 'required',
      },
      {
        id: 'wo-lq',
        label: 'Overview of Shop Front (w/o LQ)',
        importance: 'required',
      },
      {
        id: 'rear-lt',
        label: 'Overview of Shop Rear (Left View)',
        importance: 'required',
      },
      {
        id: 'rear-rt',
        label: 'Overview of Shop Rear (Right View)',
        importance: 'required',
      },
    ],
    signboards: [
      { id: '1', label: 'Store Signboard', importance: 'required' },
      { id: '2', label: 'Store Signboard' },
    ],
    corridors: [
      {
        id: 'lt',
        label: 'Common Corridor (Left View)',
        importance: 'required',
      },
      {
        id: 'rt',
        label: 'Common Corridor (Right View)',
        importance: 'required',
      },
    ],
    odas: [
      { id: 'lt', label: 'ODA (Left View)', importance: 'required' },
      { id: 'rt', label: 'ODA (Right View)', importance: 'required' },
    ],
    tradingarea: [
      { id: '1', label: 'Trading Area', importance: 'required' },
      { id: '2', label: 'Trading Area' },
    ],
    tradingrooms: [
      { id: '1', label: 'Trading Area Room' },
      { id: '2', label: 'Trading Area Room' },
    ],
    tradingtoilets: [
      { id: '1', label: 'Trading Area Toilet' },
      { id: '2', label: 'Trading Area Toilet' },
    ],
    tradingareadoors: [
      { id: '1', label: 'Trading Area Door' },
      { id: '2', label: 'Trading Area Door' },
    ],
    staircases: [{ id: '1', label: 'Staircase' }],
    lqs: [{ id: '1', label: 'Living Quarters' }],
    aircons: [],
    remarks: [],
    extras: [],
  };

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-4xl font-extrabold'>PropertyPrecinct</h1>

      <div className='mb-4 grid gap-4 grid-cols-2'>
        {layout.overviews.map(({ ...props }) => (
          <PictorialUploadCard {...props} key={props.id} />
        ))}

        {layout.signboards.map(({ ...props }) => (
          <PictorialUploadCard {...props} key={props.id} />
        ))}

        {layout.corridors.map(({ ...props }) => (
          <PictorialUploadCard {...props} key={props.id} />
        ))}

        {layout.odas.map(({ ...props }) => (
          <PictorialUploadCard {...props} key={props.id} />
        ))}

        {layout.tradingarea.map(({ ...props }) => (
          <PictorialUploadCard {...props} key={props.id} />
        ))}

        {layout.tradingrooms.map(({ ...props }) => (
          <PictorialUploadCard
            {...props}
            key={props.id}
            label={`${props.label} ${props.id}`}
          />
        ))}

        {layout.tradingtoilets.map(({ ...props }) => (
          <PictorialUploadCard
            {...props}
            key={props.id}
            label={`${props.label} ${props.id}`}
          />
        ))}

        {layout.tradingareadoors.map(({ ...props }) => (
          <PictorialUploadCard
            {...props}
            key={props.id}
            label={`${props.label} ${props.id}`}
          />
        ))}

        {layout.staircases.map(({ ...props }) => (
          <PictorialUploadCard {...props} key={props.id} />
        ))}

        {layout.lqs.map(({ ...props }) => (
          <PictorialUploadCard
            {...props}
            key={props.id}
            label={`${props.label} ${props.id}`}
          />
        ))}

        {layout.aircons.map(({ ...props }) => (
          <PictorialUploadCard {...props} key={props.id} />
        ))}

        {layout.remarks.map(({ ...props }) => (
          <PictorialUploadCard {...props} key={props.id} />
        ))}

        {layout.extras.map(({ ...props }) => (
          <PictorialUploadCard {...props} key={props.id} />
        ))}

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
