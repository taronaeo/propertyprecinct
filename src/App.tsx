import { useForm, FormProvider } from 'react-hook-form';

import templateFTT from './templates/ftt';
import UploadReportForm from './forms/UploadReport';

const App: React.FC = () => {
  const methods = useForm({ defaultValues: templateFTT });

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-4xl font-extrabold'>PropertyPrecinct</h1>

      <FormProvider {...methods}>
        <UploadReportForm />
      </FormProvider>
    </div>
  );
};

export default App;
