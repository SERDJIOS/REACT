import BasicForm from './components/BasikForm';
import ControlledInput from './components/ControlleInput';
import EmailForm from './components/EmailForm';
import SimpleForm from './components/SimpleForm';
import WatchForm from './components/WatchForm';
import { ValidationModesHTML5, ValidationModesCustom } from './components/ValidationModes';


function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <ControlledInput /><hr />
      <BasicForm /><hr />
      <SimpleForm /><hr />
      <WatchForm /><hr />
      <EmailForm /><hr />
      <ValidationModesHTML5 /><hr />
      <ValidationModesCustom /><hr />
    </div>
  );
}

export default App;
