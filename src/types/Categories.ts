import { PictorialUploadCardProps } from '../components/PictorialUploadCard';

type LinearCategories = UploadProps[] | Categories;
interface UploadProps
  extends Pick<PictorialUploadCardProps, 'label' | 'importance'> {
  counted?: boolean;
}

interface Categories {
  [category: string]: UploadProps[] | Categories;
}

export { Categories, LinearCategories, UploadProps };
