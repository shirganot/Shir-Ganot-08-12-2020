import React from 'react';
import './style.scss';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setChosenMsgId } from '../../../store/actions/navigationAction';
import { deleteMessage } from '../../../store/actions/messagesAction';

const ListOfMessages = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const msgs = useSelector(({ messages }) => messages);
  const { currTab } = useSelector(({ navigationInfo }) => navigationInfo);

  const onClickMessage = (msgId) => {
    dispatch(setChosenMsgId(msgId));
    history.push('/manage-emails/email-body');
  };

  const deleteMessageFromList = (msgId) => dispatch(deleteMessage(msgId));

  if (!msgs[currTab].length) {
    return <h3 className="err_description">There is no emails</h3>;
  }
  return (
    <List component="nav" aria-label="main mailbox folders">
      {msgs[currTab].map(({ senderEmail, subject, id }) => (
        <ListItem button key={uuid()}>
          <ListItemText
            primary={senderEmail}
            secondary={`Subject: ${subject}`}
            onClick={() => onClickMessage(id)}
          />
          <ListItemIcon onClick={() => deleteMessageFromList(id)}>
            <Delete />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};

export default ListOfMessages;
