import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const AuthorForm = (props) => {

    const history = useHistory();
    ///// Passed from add/edit pages as props \\\\\
    const { onSubmitHandler, name, setName } = props;

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Name:  </label>
                <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="name" />
                <button onClick={() => { history.push("/authors") }} className='btn btn-secondary btn-sm'>Cancel</button>
                <button className='btn btn-primary btn-sm'>Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm;