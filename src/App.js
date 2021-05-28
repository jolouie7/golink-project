import { useEffect, useState } from 'react';
import './App.css';
import RepoCard from './components/repoCard/RepoCard';

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
      {
        //map should return components to display info. Maybe have it display cards
        data.map((repo) => (
          <RepoCard
            name={repo.name}
            language={repo.language}
            description={repo.description}
            star_count={repo.stargazers_count}
            fork_count={repo.forks}
            date_created={repo.created_at}
          />))
      }
    </>
  );
}

export default App;
