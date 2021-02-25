import React, { useState, useEffect } from "react";

const UserForm = (props) => {
  const InitialFieldValues = {
    name: "",
    city: "",
  };

  var [values, setValues] = useState(InitialFieldValues)
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    
    if (props.currentID =='')
      setValues({
        ...InitialFieldValues,
      })
    else
      setValues({
        ...props.UsersObj[props.currentID],
      })
  }, [props.currentID, props.UsersObj]);

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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
