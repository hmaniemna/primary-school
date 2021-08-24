/*import React from "react";
import AddT from "../ClassMangement/AddC/AddC";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm
} from "react-crud-table";

// Component's Base CSS
import "./TeacherManagement.css";

const DescriptionRenderer = ({ field }) => <textarea {...field} />;

let tasks = [
  {
    id: 1,
    title: "Create an example",
    description: "Create an example of how to use the component"
  },
  {
    id: 2,
    title: "Improve",
    description: "Improve the component!"
  }
];

const SORTERS = {
  NUMBER_ASCENDING: (mapper) => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: (mapper) => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: (mapper) => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: (mapper) => (a, b) => mapper(b).localeCompare(mapper(a))
};

const getSorter = (data) => {
  const mapper = (x) => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === "id") {
    sorter =
      data.direction === "ascending"
        ? SORTERS.NUMBER_ASCENDING(mapper)
        : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === "ascending"
        ? SORTERS.STRING_ASCENDING(mapper)
        : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};

let count = tasks.length;
const service = {
  fetchItems: (payload) => {
    let result = Array.from(tasks);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: (task) => {
    count += 1;
    tasks.push({
      ...task,
      id: count
    });
    return Promise.resolve(task);
  },
  update: (data) => {
    const task = tasks.find((t) => t.id === data.id);
    task.title = data.title;
    task.description = data.description;
    return Promise.resolve(task);
  },
  delete: (data) => {
    const task = tasks.find((t) => t.id === data.id);
    tasks = tasks.filter((t) => t.id !== task.id);
    return Promise.resolve(task);
  }
};

const styles = {
  container: { margin: "auto", width: "fit-content" }
};

const TeacherManagement = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="المعلمــين"
      fetchItems={(payload) => service.fetchItems(payload)}
    >
      <Fields>
        <Field name="firstname" label="الإسم" />
        <Field name="lastname" label="اللقب" readOnly />
        <Field
          name="username"
          label="إسم المستخدم"
          render={DescriptionRenderer}
        />
         <Field name="password" label="كلمة العبور" />
         <Field name="gender" label="الجنس" />
      </Fields>
      <CreateForm
      title="إضافة المعلمين"
        message="قم بإضافة معلم جديد"
        trigger="Create Task"
        onSubmit={(task) => service.create(task)}
        submitText="Create"
      

      />

      <UpdateForm
        title="Task Update Process"
        message="update"
        trigger="Update"
        readOnly="true"
        onSubmit={(task) => service.update(task)}
        submitText="Update"
        validate={(values) => {
          const errors = {};

          if (!values.id === tasks.id) {
            errors.id = "Please, dont change id";
          }

          if (!values.title) {
            errors.title = "Please, provide task's title";
          }

          if (!values.description) {
            errors.description = "Please, provide task's description";
          }

          return errors;
        }}
      />

      <DeleteForm
        title="Task Delete Process"
        message="Are you sure you want to delete the task?"
        trigger="Delete"
        onSubmit={(task) => service.delete(task)}
        submitText="Delete"
        validate={(values) => {
          const errors = {};
          if (!values.id) {
            errors.id = "Please, provide id";
          }
          return errors;
        }}
      />
    </CRUDTable>
  </div>
);

export default TeacherManagement; */
import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const TeacherManagement = (props) => {

  return (
  <table class="table border shadow">
  <thead class="table-light">
    <tr> 
      <th scope="col">الإسم</th>
      <th scope="col">اللــقـب</th>
      <th scope="col">إسم المستخدم</th>
      <th>التحديث</th>
    </tr>
  </thead>
  <tbody>
  {props.teachers.map((teacher)=>{
     <tr>
       <td>{teacher.prenom}</td>
       <td>{teacher.nom}</td>
       <td>{teacher.login}</td>
     </tr>
})}

  
  </tbody>
</table>
)};

export default TeacherManagement;