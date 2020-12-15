import React from 'react';
import { Paper, Tabs as MuiTabs, Tab } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { setCurrTab } from '../../store/actions/navigationAction';

const Tabs = ({ tabs }) => {
  const dispatch = useDispatch();
  const { currTab, errInManager } = useSelector(({ navigationInfo }) => navigationInfo);

  const handleChange = (event, newValue) => {
    const newTab = tabs[newValue];
    dispatch(setCurrTab(newTab));
  };

  return (
    <Paper square>
      <MuiTabs
        value={tabs.findIndex((tab) => tab.toLowerCase() === currTab)}
        indicatorColor="secondary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        {tabs.map((label) => (
          <Tab label={label} key={uuid()} disabled={Boolean(errInManager)} />
        ))}
      </MuiTabs>
    </Paper>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tabs;
