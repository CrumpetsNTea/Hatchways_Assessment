import Students from "./Students";

import { useEffect, useState } from "react";
import "./InfoDisplay.css";

const InfoDisplay = () => {
  const [students, setStudents] = useState("");

  const api = "https://api.hatchways.io/assessment/students";

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        data.students.forEach((student) => {
          student.tags = [];
        });
        setStudents(data.students);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const addTag = (tag, id) => {
    for (let student of students) {
      if (student.id === id) {
        student.tags.push(`${tag}`);
        setStudents([...students]);
        console.log(students);
      }
    }
  };

  const getAverage = (grades) => {
    let numArray = [];
    grades.map((grade) => numArray.push(parseInt(grade)));
    let sum = numArray.reduce((a, b) => a + b, 0);
    let average = sum / numArray.length;
    return average;
  };

  const showTestResults = (grades) => {
    let counter = 0;
    let gradeArray = [];
    grades.map((grade) => gradeArray.push(parseInt(grade)));
    let gradesOutput = gradeArray.map((grade) => {
      counter++;
      return (
        <p>
          Test {counter}: &nbsp;&nbsp;&nbsp;&nbsp;{grade}%
        </p>
      );
    });
    return gradesOutput;
  };

  return (
    <>
      <div id="student-list">
        {students && (
          <Students
            students={students}
            getAverage={getAverage}
            showTestResults={showTestResults}
            addTag={addTag}
          />
        )}
      </div>
    </>
  );
};

export default InfoDisplay;
