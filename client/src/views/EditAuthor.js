import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link, useParams, useHistory } from 'react-router-dom';

const EditAuthor = (props) => {
    ///// set name field through useState \\\\\
    const [author, setAuthor] = useState("");
    const [name, setName] = useState("");
    ///// history.push to redirect to url from submitHandler \\\\\
    const history = useHistory();
    ///// to get id from URL \\\\\
    const { id } = useParams();
    ///// Create an array to store errors from the API \\\\\
    const [errors, setErrors] = useState([]);

    ///// retrieves one author at id from the url \\\\\
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                console.log("id: ", id)
                setAuthor(response.data)
                setName(response.data.name)
                console.log(response.data)
            })
            .catch(err => console.log(err));
    }, [])

    ///// sent to form as props \\\\\
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${author._id}`, {
            name
        })
            .then(res => {
                console.log(res.data)
                history.push("/authors")
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
            {/* {JSON.stringify(author.name)} */}
            <Link to="/authors" style={{color: 'dodgerblue'}}>Home</Link>
            <h3 className='mt-3'>edit {author.name}</h3>
            <AuthorForm
                onSubmitHandler={onSubmitHandler}
                name={name} setName={setName} />
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
        </div>
    )

}
export default EditAuthor;