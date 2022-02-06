import { PictorialUploadCardProps } from '../components/PictorialUploadCard';

type CardProps = Pick<PictorialUploadCardProps, 'label' | 'importance'>;

interface Categories {
  overviews: CardProps[];
  signboards: CardProps[];
  corridors: CardProps[];
  odas: CardProps[];
  tradingareas: Subcategories;
  staircases: CardProps[];
  lqs: CardProps[];
  aircons: CardProps[];
  remarks: CardProps[];
  extras: CardProps[];
}

interface Subcategories {
  [category: string]: CardProps[];
}

export { Categories, Subcategories, CardProps };
