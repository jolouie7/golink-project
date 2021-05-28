import React from 'react'

const RepoCard = ({
  name,
  language,
  description,
  star_count,
  fork_count,
  date_created,
}) => {
  return (
    <div className="card">
      <div>Name: {name}</div>
      <div>Language: {language}</div>
      <div>Description: {description}</div>
      <div>Star Count: {star_count}</div>
      <div>Fork Count: {fork_count}</div>
      <div>Date Created: {date_created}</div>
      <br />
    </div>
  );
};

export default RepoCard
