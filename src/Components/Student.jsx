import { useState } from "react";

const Student = (props) => {
  const [show, setShow] = useState(false);
  const [tagname, setTagName] = useState("");

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div id="student" key={props.id}>
      <div id="profile-pic">
        <img src={props.pic} alt="ProfilePicture"></img>
      </div>
      <div id="student-info">
        <div id="name">
          <h1>
            {props.firstName} {props.lastName}
          </h1>
        </div>
        <div id="info">
          <p id="email">Email: {props.email}</p>
          <p id="company">Company: {props.company}</p>
          <p id="skill">Skill: {props.skill}</p>
          <p id="average">Average: {props.getAverage(props.grades)}%</p>
          <div id="tag-container">
            <p>Tags:</p>
            {props.tags.map((tag) => (
              <button className="tags">{tag}</button>
            ))}
          </div>

          <input
            onChange={(event) => {
              setTagName(event.target.value);
            }}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                props.addTag(tagname, props.id);
                event.target.value = "";
              }
            }}
            type="text"
            placeholder="Add a tag"
            className="addtag"
          />
        </div>
        {show ? (
          <div id="test-results" className={props.id}>
            {props.showTestResults(props.grades)}
          </div>
        ) : null}
      </div>
      <div className="expand">
        <button id={props.id} onClick={() => handleClick(props.id)}>
          {show ? "-" : "+"}
        </button>
      </div>
    </div>
  );
};

export default Student;
