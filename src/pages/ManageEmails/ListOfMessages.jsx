import React from 'react';
import {
  List,
  ListItem,
  // ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';

const ListOfMessages = () => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        {/* <ListItemIcon></ListItemIcon> */}
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon></ListItemIcon> */}
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
  );
};

export default ListOfMessages;
