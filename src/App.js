import React, { useState } from "react";
import "./App.css";
import IssueList from "./IssueList";

function App() {
  const labels = [
    {
      id: 0,
      name: "bug",
      color: "red",
    },
    {
      id: 1,
      name: "documentation",
      color: "blue",
    },
    {
      id: 2,
      name: "question",
      color: "pink",
    },
  ];

  const [issues, setIssues] = useState([
    {
      id: 0,
      title: "Issue 0",
      label: 1,
    },
    {
      id: 1,
      title: "Issue 1",
      label: 2,
    },
    {
      id: 2,
      title: "Issue 2",
      label: 0,
    },
    {
      id: 3,
      title: "Issue 3",
      label: 2,
    },
  ]);

  const [title, setTitle] = useState("");
  const [labelId, setLabelId] = useState("2");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleLabelChange(event) {
    setLabelId(Number(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // issues.push({
    //   id: issues.length,
    //   title,
    //   label: labelId,
    // });
    // setIssues(issues);

    setIssues(
      issues.concat({
        id: issues.length,
        title,
        label: labelId,
      })
    );

    setTitle("");
    setLabelId(2);
  }

  return (
    <div className="container mt-3">
      <h1>Issues</h1>
      <IssueList issues={issues} labels={labels} />
      <div className="mt-3">
        <h3>Create Issue</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="label">Label</label>
            <select
              className="form-control"
              id="label"
              value={labelId}
              onChange={handleLabelChange}
            >
              {labels.map((label) => {
                return (
                  <option key={label.id} value={label.id}>
                    {label.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
