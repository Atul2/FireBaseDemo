import React, { useState, useEffect } from "react";

const UserForm = (props) => {
  const user = props.UsersObj.find(item => {
    
    return item.id === props.currentID
  })?.doc


  const InitialFieldValues = {
    name: "",
    city: "",
    ...user
  };
  
  var [values, setValues] = useState(InitialFieldValues)
  console.log(values)

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

   
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addorEdit(values);
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label for="name">
            <b>Enter Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={values.name}
            
            onChange={handleInputChange}
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label for="City">
            <b>Enter City</b>
          </label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={values.city}
            onChange={handleInputChange}
            id="city"
            placeholder="Enter City"
          />
        </div>
        <input type="submit" value={props.currentID?"Update":"Add"} className="btn btn-primary"/>
          
      </form>
    </>
  );
};

export default UserForm;
