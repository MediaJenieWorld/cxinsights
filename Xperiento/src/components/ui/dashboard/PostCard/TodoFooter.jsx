import React from "react";

const TodoPostFooter = () => {
  return (
    <div className="Like_Dislike_footer">
      <div
        style={{ "--hoverColor": "var(--star-color)" }}
        className="icon-container"
      >
        <i className="pi pi-check"></i>
      </div>
      <div
        style={{ "--hoverColor": "var(--star-color)" }}
        className="icon-container"
      >
        <i className="pi pi-comment"></i>
      </div>
    </div>
  );
};

export default TodoPostFooter;
