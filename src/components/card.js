import React from "react";

const Card = ({ project }) => {
  return (
    <div className="card">
      {/* <div className="imgcont">
              <img src={webimgs[indx]} className="card-img" />
            </div> */}
      <div className="card-info">
        <h6 className="card-title">{project.title}</h6>
        <p className="card-desc">{project.description}</p>
      </div>
      <ul className="card-links">
        <li className="card-link card-source-code">
          <a href={project.sourcecodeurl}>Code</a>
        </li>
        {project.site !== project.sourcecodeurl && (
          <li className="card-link card-site">
            <a href={project.site}>Site</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Card;
