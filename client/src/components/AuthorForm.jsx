import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const AuthorForm = (props) => {

    const history = useHistory();

    const { onSubmitHandler, name, setName} = props;

    return (
        <div>
        <form onSubmit={onSubmitHandler}>
            <label>Name:  </label>
            <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="name"/>
            {/* <Link to="/authors" className='btn'>Cancel</Link> */}
            <button className='btn btn-secondary btn-sm' onClick={ () => {history.push("/authors")}}>Cancel</button>
            <button className='btn btn-primary btn-sm'>Submit</button>
        </form>
        </div>
    )
}

export default AuthorForm;