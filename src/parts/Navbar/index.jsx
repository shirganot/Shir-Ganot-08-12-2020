import React, { useEffect } from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { fade, makeStyles } from '@material-ui/core/styles';
import { EMAIL_VALIDATION } from '../../constants';
import { getAllUserMessages } from '../../store/actions/messagesAction';
import { setErrorTypeOfEmail } from '../../store/actions/navigationAction';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, formState, watch } = useForm({
    mode: 'onChange',
  });

  const { isValid, errors } = formState;

  useEffect(() => {
    const email = watch('searchedEmail');
    if (isValid && email) {
      dispatch(getAllUserMessages(email));
    } else if (errors.searchedEmail) {
      dispatch(setErrorTypeOfEmail(errors.searchedEmail.type));
    }
  }, [formState]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Emails Manager</Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Enter email address"
            name="searchedEmail"
            inputRef={register({ required: true, pattern: EMAIL_VALIDATION })}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
