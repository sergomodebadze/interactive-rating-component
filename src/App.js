import FirstPage from './components/FirstPage';
import SecondPage from './components/Thanks';
import { useState } from 'react';



function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className='container'>
      {
        !status?
        <FirstPage setStatus={setStatus} status={status} />
        :
        <SecondPage />
      }
    </div>
  );
}


export default App;