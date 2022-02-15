import { Categories } from '../types/Categories';

const template: Categories = {
  overviews: [
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
  signboards: [
    { label: 'Store Signboard', importance: 'required' },
    { label: 'Store Signboard' },
  ],
  corridors: [
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
  odas: [
    { label: 'ODA (Left View)', importance: 'required', counted: false },
    { label: 'ODA (Right View)', importance: 'required', counted: false },
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

export default template;
