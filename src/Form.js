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
import { LockOutlined } from '@material-ui/icons';

import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
  english: {
    signIn: 'Sign In',
    email: 'Email',
    password: 'Password',
    remember: 'Remember Me',
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Adresse Electronique',
    password: 'Mot de Passe',
    remember: 'Souviens-toi De Moi',
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electronico',
    password: 'Contrasena',
    remember: 'Recuerdame',
  },
};

class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, signIn, password, remember } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullwidth="true">
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" autoFocus name="email"></Input>
            </FormControl>
            <FormControl margin="normal" required fullwidth="true">
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" autoFocus name="password"></Input>
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />
            <Button
              variant="contained"
              type="submit"
              fullwidth="true"
              color="primary"
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
