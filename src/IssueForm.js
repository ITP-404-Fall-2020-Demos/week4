import React, { useState } from "react";

export default function IssueForm({ labels, onSubmit }) {
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
    onSubmit({
      title,
      label: labelId,
    });

    setTitle("");
    setLabelId(2);
  }

  return (
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
  );
}
