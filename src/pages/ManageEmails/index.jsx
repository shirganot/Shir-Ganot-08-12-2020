import React from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import ListOfMessages from './ListOfMessages';
import Tabs from '../../parts/Tabs';
import Navbar from '../../parts/Navbar';
import Snackbar from '../../components/Snackbar';

const ManageEmails = () => {
  const history = useHistory();
  const openComposeEmail = () => history.push(`/manage-emails/compose`);

  return (
    <div className="manage-emails page">
      <Navbar />
      <Tabs tabs={[`sent`, `received`]} />
      <ListOfMessages />
      <Snackbar />
      <Fab size="large" color="primary" aria-label="add" onClick={openComposeEmail}>
        <Add />
      </Fab>
    </div>
  );
};

export default ManageEmails;
