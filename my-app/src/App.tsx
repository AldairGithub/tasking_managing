import React, {useEffect, useState} from 'react';
import './App.css';
import Main from './pages/Main';

function App() {

  const [listing, setListing] = useState<boolean>(true);

  useEffect(() => {
    // This would look for any tasks in localStorage, then update tasks
    // Page should render after this is done tho, so we dont have a case where components are loaded before tasks are
  })

  return (
    <div className="App">
      <Main listing={listing} setListing={ setListing }/>
    </div>
  );
}

export default App;
