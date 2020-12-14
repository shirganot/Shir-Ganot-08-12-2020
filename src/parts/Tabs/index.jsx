import React, { useState } from 'react';
import { Paper, Tabs as MuiTabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

const Tabs = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <MuiTabs
        value={value}
        indicatorColor="secondary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        {tabs.map((label) => (
          <Tab label={label} key={uuid()} />
        ))}
      </MuiTabs>
    </Paper>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tabs;
