import React from 'react'
import { useHistory } from "react-router-dom";


const RepoCard = ({
  name,
  language,
  description,
  star_count,
  fork_count,
  date_created,
  getCommitData,
}) => {
  let history = useHistory();

  //After clicking on a repo card, it should load the 3 most recent commits
  const handleClick = (e) => {
    fetch(
      //this will return more then 1 commit log
      `https://api.github.com/repos/Netflix/${name}/commits?per_page=1/master`
    )
      .then((response) => response.json())
      .then((data) => {
        getCommitData(data.slice(0, 3)) // gets the 3 most recent commits
        history.push("/commits")
      });
  };

  return (
    <div className="card" onClick={handleClick}>
      <div>Name: {name}</div>
      <div>Language: {language}</div>
      <div>Description: {description}</div>
      <div>Star Count: {star_count}</div>
      <div>Fork Count: {fork_count}</div>
      <div>Date Created: {date_created}</div>
    </div>
  );
};

export default RepoCard
