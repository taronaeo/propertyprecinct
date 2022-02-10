import { Categories } from '../types/Categories';

const template: Categories = {
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

export default template;
