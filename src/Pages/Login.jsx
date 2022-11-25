import {  ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { login } from '../Services/AuthApi';
import { doLogin } from '../Auth/AuthLocalStorage';
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
    
    const [timer, setTimer] = useState(null)

    const [loginData, setLoginData] = new useState({
        username: "",
        password: ""
    });
    useEffect(() => {
        const node = document.getElementById("smallPasswordIndicator")
        if (loginData.password.length > 8 || loginData.password.length ==    0) {
            node.innerHTML = ""
        } else if (loginData.password.length !== 0 && loginData.password.length < 8) {
            clearTimeout(timer)
            const newTimer = setTimeout(() => {
                node.innerHTML = "too small"
            }, 500)
            
            setTimer(newTimer)
        }
        console.log(loginData.password.length)

    }, [loginData])

    const handleChange = (event, property) => {
        setLoginData({ ...loginData, [property]: event.target.value })
    }

    const submitForm = () => {

        if (loginData.username != null /* && loginData.password.length >= 8 */) {
            login(loginData).then((userInfo) => {
                doLogin(userInfo,()=>{
                    console.log("data saved");
                })
                navigate('/user/home')
                console.log(userInfo);
            }).catch((error) => {
                console.log(error)
            })
        }
    }



    return (
        <div className='loginPage'>
            <div className='loginRight'>
                {/* Login  */}
                <div className='card'>
                    <div className="cardDetails">
                        <h3>Login to your Account</h3>
                        <br></br>
                        {/* {loginData.password} */}
                        <label className='label'>Email</label>
                        <input className='loginTextField'
                            value={loginData.username}
                            onChange={(e) => handleChange(e, 'username')}
                            type="text" required></input>
                        <label className='label'>Password</label>
                        <input id='password'
                            className='loginTextField'
                            type="text"
                            placeholder='password'
                            value={loginData.password}
                            onChange={(e) => handleChange(e, 'password')}
                            required></input>
                        <p id='smallPasswordIndicator' style={{ color: "red" }}></p>



                        <div className="login">
                            <Button
                                style={{
                                    backgroundColor: "#424244",
                                    fontSize: "15px"
                                }}
                                onClick={submitForm}
                                className='loginButton'
                                variant="contained">Login</Button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="loginLeft">
                {/* login with github */}
                <div className='card'>
                    <div className="cardDetails">
                        <h3>Login with Another Provider</h3>
                        <br>

                        </br>
                        <br>

                        </br>
                        <div className="buttonsAuth">
                            {/* <Button className='authbutton' variant="contained" color='secondary'>Github</Button>
                            <Button className='authbutton' variant="contained" color='secondary'>Microsoft</Button>
                            <Button variant="contained" className='authbutton' color='secondary'>Google</Button> */}
                            <ButtonGroup variant="contained" >
                                <Button style={{

                                    backgroundColor: "#424244",
                                    borderColor: "grey",
                                    fontSize: "15px"
                                }}>Github</Button>
                                <Button
                                    style={{

                                        backgroundColor: "#424244",
                                        borderColor: "grey",
                                        fontSize: "15px"
                                    }}>Microsoft</Button>
                                <Button
                                    style={{

                                        backgroundColor: "#424244",
                                        borderColor: "grey",

                                        fontSize: "15px"
                                    }}>GOogle</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;