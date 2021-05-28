import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    // Make call to load data into state
    fetch("https://api.github.com/orgs/Netflix/repos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [])

  return (
    <>
      <h1>Hello World</h1>
      {
        //map should return components to display info. Maybe have it display cards
        data.map((repo) => {})
      }
    </>
  );
}

export default App;
