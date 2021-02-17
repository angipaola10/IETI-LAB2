import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = () => {
        if(email === localStorage.getItem("userEmail") && password === localStorage.getItem("userPassword")){
            localStorage.setItem("loggingStaus", "logged");
            window.location.href = "/todo";
        }else{
            alert("Oops, try again")
        }
    }

    return (
        <React.Fragment>
            <main className="layout">
                <Paper className="paper">
                    <Avatar className="avatar">
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h4">Sign in</Typography>
                    <form className="form">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus 
                                onChange={(e) => setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{"marginTop": "2rem"}}
                            onClick={logIn}
                        >
                            Sign in
                            </Button>
                    </form>
                </Paper>
            </main>
        </ React.Fragment>
    );
}

