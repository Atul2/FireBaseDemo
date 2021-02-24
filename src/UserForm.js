
import React,{useState} from "react";

const UserForm = (props) => {

    const InitialFieldValues = {
        name: '',
        city: ''
    }

    var [values, setValues] = useState(InitialFieldValues)
    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addorEdit(values);

    }


    return ( 
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label for="name">Enter Name</label>
                    <input type="text" className="form-control" name="name" value={ values.name } onChange={handleInputChange} id="name" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                  <label for="City">Enter City</label>
                  <input type="text" className="form-control" name="city" value={ values.city } onChange={handleInputChange} id="city" placeholder="Enter City"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
     );
}
 
export default UserForm;