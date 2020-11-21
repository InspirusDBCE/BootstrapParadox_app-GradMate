import React,{useState} from 'react'
import {Redirect} from 'react-router-dom';
import {  signin, authenticate ,isAuthenticated} from './indexllogo';

const Signin=()=> {

    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email,password,error,loading,didRedirect}=values;
    const {user}=isAuthenticated();

    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,loading:false})
            }
            else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        didRedirect:true
                    })
                })
            }
        })
        .catch(console.log("Signin request failed"))
    }

    const performRedirect=()=>{

        if(isAuthenticated()){
            return <Redirect to="/" />
        }
    }

    const loadingMessage = () => {
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
      };
    
      const errorMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
            </div>
          </div>
        );
      };

    const signinForm=()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-dark">Email-Id</label>
                            <input onChange={handleChange("email")} value={email} className="form-control" type="email"></input>
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Password</label>
                            <input onChange={handleChange("password")} value={password} className="form-control" type="password"></input>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div>
            {loadingMessage()}
            {errorMessage()}
            {signinForm()}
            {performRedirect()}
        </div>
    )
}

export default Signin;