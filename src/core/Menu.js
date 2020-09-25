import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from 'auth';

const Menu = ({ history }) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
            {
                        !isAuthenticated() ?
                        <React.Fragment>
                            <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Signin</Link>
                            </li>
                        </React.Fragment>
                        :
                        <li className="nav-item">
                        <span 
                            className="nav-link" 
                            to="/signin" 
                            onClick={() => {
                                signout(()=> {
                                    history.push("/");
                                });
                            }}
                        >
                            Signout
                        </span>
                    </li>
                    }
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            </div>
      </nav> 
    )
}
export default withRouter(Menu);