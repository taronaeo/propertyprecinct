import { PictorialUploadCardProps } from '../components/PictorialUploadCard';

type LinearCategories = UploadProps[] | Categories;
type UploadProps = Pick<PictorialUploadCardProps, 'label'>;

interface Categories {
  [category: string]: UploadProps[] | Categories;
}

export { Categories, LinearCategories, UploadProps };
