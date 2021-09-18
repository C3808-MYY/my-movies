import React from 'react';

const MovieList = (props) => {

        // function handleClick(event){
        //     console.log(event)

        // }

        return(
            <div className="row">

            {props.movies.map((movie) => (

                <div className="col-lg-4 " key={movie.id}>
                    <div className="cart mb-4 shadow-sm">
                    <img src={movie.imageURL} className="card-img-top" alt="Sample Movie"/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.name}</h5>
                        <p className="card-tex">{movie.overview}</p>
                        <div className="d-flex justify-content-between align-item-center">
                            <button className="btn btn-md btn-outline-danger" onClick={(event) => props.deleteMovieProp(movie) } type="button">Delete</button>
                            <h2><span className="">{movie.rating}</span></h2>
                        </div>
                    </div>
                </div>
            </div> 
            ))}
                
            </div>
        )
    
}
export default MovieList;