import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    ///// loading for ternary rendering when waiting for API response \\\\\
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    ///// gets all authors upon loading \\\\\
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, []);
    ///// remove author from DOM after deleted \\\\\
    const removeFromDom = (id) => {
        setAuthors(authors.filter(author => author._id !== id));
    }
    ///// DELETE \\\\\
    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(res => { removeFromDom(id) })
            .catch(err => console.log(err));
    }

    return (
        <div className="container-sm">
            {/* {JSON.stringify(authors)} */}
            <Link to="/authors/new" style={{color: 'dodgerblue'}}>Add an author</Link>
            <h3>We have quotes by:</h3>
            {loaded ?
                <table className='table table-light table-striped'>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author, idx) =>
                            <tr key={idx}>
                                <td>{author.name}</td>
                                <td><Link to={`/authors/${author._id}/edit`} className='btn btn-primary btn-sm me-5'>edit</Link>
                                    <button onClick={() => { deleteAuthor(author._id) }}
                                        className='btn btn-outline-danger btn-sm'>delete</button>
                                </td>

                            </tr>
                        )}
                    </tbody>
                </table>
                : <h4>loading...</h4>
            }
        </div>
    )
}

export default Main;