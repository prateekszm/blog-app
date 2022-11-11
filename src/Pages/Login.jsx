

import { ButtonGroup, Stack } from '@mui/material';
import Button from '@mui/material/Button';



const Login = () => {

    return (
        <div className='loginPage'>
            <div className='loginRight'>
                {/* Login  */}
                <div className='card'>
                    <div className="cardDetails">
                        <h3>Login to your Account</h3>
                        <br></br>
                        <label className='label'>Email</label>
                        <input className='loginTextField' autocomplete="off" type="text" required></input>
                        <label className='label'>Password</label>
                        <input className='loginTextField' type="password" required></input>
                        <div className="login">
                            <Button 
                            style={{
                                
                                backgroundColor: "#424244",
    
                                fontSize: "15px"
                            }}
                            
                            className='loginButton' variant="contained" color='secondary'>Login</Button>
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
                                borderColor:"grey",
                                fontSize: "15px"
                            }}>Github</Button>
                                <Button
                                style={{
                                
                                    backgroundColor: "#424244",
                                    borderColor:"grey",
                                    fontSize: "15px"
                                }}>Microsoft</Button>
                                <Button
                                style={{
                                
                                    backgroundColor: "#424244",
                                    borderColor:"grey",
        
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