import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RepoCard from './components/repoCard/RepoCard';
import CommitCard from './components/commitCard/CommitCard';

function App() {
  const [data, setData] = useState([])
  const [commitData, setCommitData] = useState([])

  useEffect(() => {
    // Make call to load data into state
    fetch("https://api.github.com/orgs/Netflix/repos")
      .then((response) => response.json())
      .then((data) =>
        //sorts the repos in descending order
        data.sort(
          (a, b) =>
            parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count)
        )
      )
      .then((sortedData) => setData(sortedData));
  }, [])

  //callback function after clicking a repo card
  const getCommitData = (data) => {
    setCommitData(data)
  }

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/commits">Commits</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/commits">
              <CommitCard commitData={commitData} />
            </Route>
            <Route path="/">
              {
                //map should return components to display info. Maybe have it display cards
                data.map((repo, idx) => (
                  <RepoCard
                    key={idx}
                    name={repo.name}
                    language={repo.language}
                    description={repo.description}
                    star_count={repo.stargazers_count}
                    fork_count={repo.forks}
                    date_created={repo.created_at}
                    getCommitData={getCommitData}
                  />
                ))
              }
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
