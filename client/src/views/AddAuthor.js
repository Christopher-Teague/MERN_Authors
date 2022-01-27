import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import { useHistory } from 'react-router-dom';

const AddAuthor = (props) => {
    ///// set name field through useState \\\\\
    const [name, setName] = useState("");
    ///// history.push to redirect to url from submitHandler \\\\\
    const history = useHistory();
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);
    ///// Logic for creating new author \\\\\
    const onSubmitHandler = (e) => {
        e.preventDefault();
        ///// make a post request to create a new author \\\\\
        axios.post('http://localhost:8000/api/authors', { name })
            .then(response => {
                history.push('/authors')
                console.log(response.data)
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                ///// Set Errors \\\\\
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <Link to="/authors" style={{color: 'dodgerblue'}}>Home</Link>
            <h3 className='mt-3'>add a new Author</h3>

            <AuthorForm onSubmitHandler={onSubmitHandler}
                name={name} setName={setName} />
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
        </div>
    )

}
export default AddAuthor;