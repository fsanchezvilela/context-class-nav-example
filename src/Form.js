import React, { Component } from 'react';
import {
    Avatar,
    Button,
    FormControl,
    FormControlLabel,
    Checkbox,
    Input,
    InputLabel,
    Paper,
    Typography,
    MenuItem,
    Select,
} from '@material-ui/core';
import { LockOutlined } from "@material-ui/icons";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";

class Form extends Component {
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
               <Paper className={classes.paper}>
                   <Avatar className={classes.avatar}>
                       <LockOutlined/>
                   </Avatar>
                   <Typography variant="h5">Sign In</Typography>
                   <Select value='english'>
                       <MenuItem value="english">English</MenuItem>
                       <MenuItem value="french">French</MenuItem>
                       <MenuItem value="spanish">Spanish</MenuItem>
                   </Select>
                   <form className={classes.form}>
                       <FormControl margin="normal" required fullwidth="true">
                           <InputLabel htmlFor="email">Email</InputLabel>
                           <Input id="email" autoFocus name="email"></Input>
                       </FormControl>
                       <FormControl margin="normal" required fullwidth="true">
                           <InputLabel htmlFor="password">password</InputLabel>
                           <Input id="password" autoFocus name="password"></Input>
                       </FormControl>
                        <FormControlLabel 
                            control={<Checkbox color='primary'/>}
                            label='Remember Me'
                        />
                        <Button 
                            variant="contained" 
                            type="submit" 
                            fullwidth='true'
                            color="primary" 
                            className={classes.submit}>
                            SIGN IN
                        </Button>

                   </form>
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(Form);