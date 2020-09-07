import React from "react";
import "./App.css";

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

  const issues = [
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
  ];

  const labelsById = {};

  labels.forEach((label) => {
    labelsById[label.id] = label;
  });

  return (
    <div className="container mt-3">
      <h1>Issues</h1>
      <ul className="list-group">
        {issues.map((issue) => {
          // Less efficient way
          // const label = labels.find((label) => {
          //   return label.id === issue.label;
          // });
          const label = labelsById[issue.label];

          return (
            <li
              key={issue.id}
              className="list-group-item d-flex justify-content-between"
            >
              <div>{issue.title}</div>
              <div>
                <span
                  className="badge badge-pill text-white"
                  style={{
                    backgroundColor: label.color,
                  }}
                >
                  {label.name}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
