import { Categories } from '../types/Categories';

const template: Categories = {
  overview: [
    {
      label: 'Overview of Shop Front (w/ LQ)',
      importance: 'required',
      counted: false,
    },
    {
      label: 'Overview of Shop Front (w/o LQ)',
      importance: 'required',
      counted: false,
    },
    {
      label: 'Overview of Shop Rear (Left View)',
      importance: 'required',
      counted: false,
    },
    {
      label: 'Overview of Shop Rear (Right View)',
      importance: 'required',
      counted: false,
    },
  ],
  signboard: [
    { label: 'Store Signboard', importance: 'required' },
    { label: 'Store Signboard' },
  ],
  corridor: [
    {
      label: 'Common Corridor (Left View)',
      importance: 'required',
      counted: false,
    },
    {
      label: 'Common Corridor (Right View)',
      importance: 'required',
      counted: false,
    },
  ],
  oda: [
    { label: 'ODA (Left View)', importance: 'required', counted: false },
    { label: 'ODA (Right View)', importance: 'required', counted: false },
  ],
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
  remark: [{ label: 'Remark Photo' }],
  extra: [{ label: 'Extra Photo' }],
};

export default template;
