import { PictorialUploadCardProps } from '../components/PictorialUploadCard';

type UploadProps = Pick<PictorialUploadCardProps, 'label' | 'importance'>;
type LinearCategories = UploadProps[] | Categories;

interface Categories {
  [category: string]: UploadProps[] | Categories;
}

export { Categories, LinearCategories, UploadProps };
