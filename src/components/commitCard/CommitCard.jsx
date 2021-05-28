import React from "react";

const CommitCard = ({
  commitData
}) => {

  return (
    <>
      {commitData.map((commit) => (
        <div className="card">
          {commit.author === true ? (
            <div>Author: {commit.author.login}</div>
          ) : (
            <div>Author: None</div>
          )}
          <div>Title: {commit.commit.message}</div>
          <div>Hash: {commit.sha}</div>
          <div>Date: {commit.commit.committer.date}</div>
        </div>
      ))}
    </>
  );
};

export default CommitCard;
