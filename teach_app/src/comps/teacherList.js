import React, { useState, useEffect } from "react";
import Teacher from "./teacher.js";
import axios from "axios";

const TeacherList = props => {
  const [teachers, setTeachers] = useState([]);
  const getTeachers = () => {
    const api = "http://www.localhost:4000/api/teachers";
    if (localStorage.getItem("token")) {
      const headers = { authorization: localStorage.getItem("token") };
      axios
        .get(api, { headers })
        .then(res => {
          setTeachers(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      props.history.replace("/login");
    }
  };
  useEffect(() => {
    getTeachers();
  }, [teachers.length]);

  return (
    <div className="teacherListCont">
      {teachers.map(t => {
        return <Teacher name={t.tea_name} key={t.id} />;
      })}
    </div>
  );
};

export default TeacherList;
