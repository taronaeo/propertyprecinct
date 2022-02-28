import { UploadBoxProps } from '../components/UploadBox';

type LinearCategories = UploadProps[] | Categories;
type UploadProps = Pick<UploadBoxProps, 'label'>;

interface Categories {
  [category: string]: UploadProps[] | Categories;
}

export { Categories, LinearCategories, UploadProps };
