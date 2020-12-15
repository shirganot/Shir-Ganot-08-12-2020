import React from 'react';
import { Snackbar as MuiSnackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ERR_STR } from '../../constants';

const Snackbar = () => {
  const { pathname } = useLocation();
  const { error } = useSelector((state) => state);

  const pathArr = pathname.split('/');
  const inManagerPage = pathArr[pathArr.length - 1] === 'manage-emails';
  return (
    <MuiSnackbar open={Boolean(error) && inManagerPage} autoHideDuration={6000}>
      <Alert variant="filled" severity="error">
        {ERR_STR[error] || error}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
