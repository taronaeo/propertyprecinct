import { Categories } from '../types/Categories';

const template: Categories = {
  overview: [
    {
      label: 'Overview of Shop Front (w/ LQ)',
    },
    {
      label: 'Overview of Shop Front (w/o LQ)',
    },
    {
      label: 'Overview of Shop Rear (Left View)',
    },
    {
      label: 'Overview of Shop Rear (Right View)',
    },
  ],
  signboard: [{ label: 'Store Signboard' }, { label: 'Store Signboard' }],
  corridor: [
    {
      label: 'Common Corridor (Left View)',
    },
    {
      label: 'Common Corridor (Right View)',
    },
  ],
  oda: [{ label: 'ODA (Left View)' }, { label: 'ODA (Right View)' }],
  tradingarea: {
    rooms: [{ label: 'Trading Area Room' }],
    toilets: [{ label: 'Trading Area Toilet' }],
    firedoors: [{ label: 'Trading Area Firedoor' }],
  },
  staircase: [{ label: 'Internal Staircase' }],
  lq: {
    hall: [{ label: 'Living Quarters Hall' }],
    kitchen: [{ label: 'Living Quarters Kitchen' }],
    room: [{ label: 'Living Quarters Room' }],
    storeroom: [{ label: 'Living Quarters Storeroom' }],
  },
  aircon: [{ label: 'Aircon' }],
  remark: [{ label: 'Remarks' }],
  extra: [{ label: 'Extras' }],
};

export default template;
