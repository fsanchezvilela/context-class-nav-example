import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Switch,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span role="img" aria-label="flag-icon">🇫🇷</span>
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color='inherit'>
                            App Title
                        </Typography>
                        <Switch/>
                        <div className={classes.grow}/>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search/>
                            </div>
                            <InputBase placeholder="Search..." classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


export default withStyles(styles)(Navbar);