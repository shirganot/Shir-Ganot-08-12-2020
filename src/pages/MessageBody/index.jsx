import React from 'react';
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
  DialogTitle,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Close } from '@material-ui/icons';
import { deleteMessage } from '../../store/actions/messagesAction';

const MessageBody = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { chosenMsgId, currTab } = useSelector(({ navigationInfo }) => navigationInfo);
  const msgs = useSelector(({ messages }) => messages);

  const moveToManageEmails = () => history.push('/manage-emails');

  const deleteThisMessage = () => {
    dispatch(deleteMessage(chosenMsgId));
    moveToManageEmails();
  };

  const currMsg = msgs[currTab].find(({ id }) => id === chosenMsgId);
  const { subject, body } = currMsg;

  return (
    <Dialog
      className="compose-email"
      open
      scroll="paper"
      onClose={moveToManageEmails}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" disableTypography>
        Email
        <IconButton aria-label="close" onClick={moveToManageEmails}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="title">{subject}</Typography>
        <DialogContentText>{body}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={deleteThisMessage} color="primary" variant="contained">
          delete
          <Delete />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageBody;
