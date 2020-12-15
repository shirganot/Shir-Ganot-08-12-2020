import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import ListOfMessages from './ListOfMessages';
import Tabs from '../../parts/Tabs';
import Navbar from '../../parts/Navbar';
import { ERR_STR } from '../../constants';

const ManageEmails = () => {
  const history = useHistory();
  const { errInManager } = useSelector(({ navigationInfo }) => navigationInfo);

  const openComposeEmail = () => history.push(`/manage-emails/compose`);

  return (
    <div className="manage-emails page">
      <Navbar />

      <Tabs tabs={[`sent`, `received`]} />
      {errInManager ? (
        <h3 className="err_description">{ERR_STR[errInManager] || errInManager}</h3>
      ) : (
        <ListOfMessages />
      )}
      <Fab size="large" color="primary" aria-label="add" onClick={openComposeEmail}>
        <Add />
      </Fab>
    </div>
  );
};

export default ManageEmails;
