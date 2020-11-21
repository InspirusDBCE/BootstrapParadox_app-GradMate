import React,{Fragment} from 'react'
import {Link,Redirect,withRouter} from 'react-router-dom';
import { signout,isAuthenticated } from '../User/indexllogo';
import "../styles.css"

const currentTab=(history,path)=>{
    if(history.location.pathname===path){
        return {color:"#2ecc72"};
    }
    else{
        return {color:"#FFFFFF"};
    }
}

const Navbar=(history)=> {
    return (
        <div>
            <div className="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#"><i className="logo fas fa-university"></i>GradMate</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn my-2 my-sm-0" type="submit"><i class="search-icon fas fa-search"></i></button>
                </form>
                </li>
            </ul>
            {!isAuthenticated()&&(
                    <Fragment>
                    <li className="nav-item">
                        <Link style={currentTab(history,"/signup")} className="nav-link" to="/signup">
                            SignUp
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history,"/signin")} className="nav-link" to="/signin">
                            SignIn
                        </Link>
                    </li>
                </Fragment>
                )}
                {isAuthenticated()&&(<li className="nav-item" style={{cursor:"pointer"}}>
                    <span className="nav-link text-warning"
                    onClick={()=>{
                        signout(()=>{
                            history.push("/");
                        })
                    }}>
                        Signout
                    </span>
                </li>)}
            </nav>
                </div>
        </div>
    )
}

export default withRouter(Navbar)