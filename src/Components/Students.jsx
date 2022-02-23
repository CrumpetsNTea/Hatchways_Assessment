import { useState } from "react";
import Student from "./Student";

const Students = (props) => {
  const [filter, setFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  const addTag = (tag, id) => {
    props.addTag(tag, id);
  };

  return (
    <div>
      <input
        id="filter"
        name="filter"
        type={"text"}
        placeholder="Search by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value.toLowerCase())}></input>
      <input
        id="filter"
        name="filter"
        type={"text"}
        placeholder="Search by tag"
        value={tagFilter}
        onChange={(e) => setTagFilter(e.target.value.toLowerCase())}></input>

      {props.students
        .filter(
          (student) =>
            student.firstName.toLowerCase().includes(filter) ||
            student.lastName.toLowerCase().includes(filter) ||
            filter === ""
        )
        .filter(
          (student) =>
            student.tags.join().includes(tagFilter) || tagFilter === ""
        )
        .map((student) => (
          <Student
            key={student.id}
            getAverage={props.getAverage}
            showTestResults={props.showTestResults}
            addTag={addTag}
            id={student.id}
            pic={student.pic}
            firstName={student.firstName}
            lastName={student.lastName}
            email={student.email}
            company={student.company}
            skill={student.skill}
            grades={student.grades}
            tags={student.tags}
          />
        ))}
    </div>
  );
};

export default Students;
