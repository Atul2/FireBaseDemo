import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";

import db from "./firebase";

const User = () => {
  var [UsersObj, setUsersObj] = useState([]);
  var [currentID, setCurrentID] = useState('');
   
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      
      
      setUsersObj(
        snapshot.docs.map((doc) => ({
          doc: doc.data().obj,
          id: doc.id,
        }))
      );
    });
  }, []);

 

  const addorEdit = (obj) => {
    if(currentID=='')
      db.collection("users").add({ obj, createdAt: new Date() }).then(() => console.log("added"));
    else
      db.collection("users").doc(currentID).update({obj,createdAt: new Date()}) .then(() => console.log("updated"));
  };

  const onDelete = key => {
    if (window.confirm("Are you sure to delete this record?")) {
      db.collection("users").doc(key).delete({createdAt: new Date()}) .then(() => console.log("deleted"));
    }
  }
  return (
    <>
      <div className="col-md-5">
        <UserForm addorEdit={addorEdit} key={currentID} currentID={currentID} UsersObj={UsersObj} />
      </div>

      <div className="col-md-7">
        <table className="table">
          <thead>
            <tr style={{ color: "blue", backgroundColor: "aquamarine" }}>
              <th>S.No.</th>
              <th>NAME</th>
              <th>CITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {UsersObj.map((data, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{data.doc.name}</td>
                  <td>{data.doc.city}</td>
                  <td>
                    <a
                      className="btn text-primary"
                      onClick={() => {
                        setCurrentID(data.id)
                      }}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    
                    <a className="btn text-danger"
                    onClick={() => {
                      onDelete(data.id)
                    }}>
                      <i className="fas  fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
