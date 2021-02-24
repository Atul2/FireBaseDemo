import React from "react";
import UserForm from "./UserForm";

import db from './firebase';

const User = () => {
    const addorEdit = obj => {
        console.log(obj)
        db.collection("users").add({
            obj, createdAt:new Date()
        }).then(()=>console.log("added"))
    }
    return ( 
        <>
            <div className="col-md-5">
                <UserForm addorEdit={ addorEdit }/>
          </div>

          <div className="col-md-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">CITY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
     );
}
 
export default User;