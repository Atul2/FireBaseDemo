import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";

import db from "./firebase";

const User = () => {
  var [UsersObj, setUsersObj] = useState([]);
  var [currentID, setcurrentID] = useState('');

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data().obj));
      console.log(
        snapshot.docs.map((doc) => ({
          doc: doc.data().obj,
          id: doc.id,
        }))
      );
      setUsersObj(
        snapshot.docs.map((doc) => ({
          doc: doc.data().obj,
          id: doc.id,
        }))
      );
    });
  }, []);

  console.log(UsersObj);

  const addorEdit = (obj) => {
    db.collection("users")
      .add({
        obj,
        createdAt: new Date(),
      })
      .then(() => console.log("added"));
  };
  return (
    <>
      <div className="col-md-5">
        <UserForm addorEdit={addorEdit} currentID={currentID} UsersObj={UsersObj} />
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
                        setcurrentID(data.id);
                      }}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    {data.id}
                    <a className="btn text-danger">
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
