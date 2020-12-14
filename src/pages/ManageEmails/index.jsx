import React from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import ListOfMessages from './ListOfMessages';
import Tabs from '../../parts/Tabs';
import Navbar from '../../parts/Navbar';

const ManageEmails = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const { register, errors, watch } = useForm();

  return (
    <div className="manage-emails page">
      <Navbar />

      <Tabs tabs={[`Sent`, `Received`]} />
      <p>please specify the desired user</p>

      {/* <ListOfMessages /> */}
      <Fab
        size="large"
        color="primary"
        aria-label="add"
        onClick={() => history.push(`${pathname}/compose`)}
      >
        <Add />
      </Fab>
    </div>
  );
};

export default ManageEmails;
