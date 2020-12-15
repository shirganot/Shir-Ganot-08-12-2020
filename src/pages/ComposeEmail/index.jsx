import React from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  DialogTitle,
} from '@material-ui/core';
import { Delete, Send, Close } from '@material-ui/icons';
import { EMAIL_VALIDATION, ERR_STR } from '../../constants';
import { createNewMessage } from '../../store/actions/messagesAction';

const ComposeEmail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const moveToManageEmails = () => history.push('/manage-emails');

  const onSubmit = (data) => {
    dispatch(createNewMessage(data));
    moveToManageEmails();
  };

  return (
    <Dialog
      className="compose-email"
      open
      onClose={moveToManageEmails}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" disableTypography>
        <Typography variant="h5">Compose Email</Typography>
        <IconButton aria-label="close" onClick={moveToManageEmails}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} id="myform">
          <TextField
            type="text"
            name="senderEmail"
            label="enter sender email"
            variant="outlined"
            inputRef={register({ required: true, pattern: EMAIL_VALIDATION })}
            error={Boolean(errors.senderId)}
            helperText={errors.senderId && ERR_STR[errors.senderId.type]}
          />
          <TextField
            type="text"
            name="receiverEmail"
            label="enter receiver email"
            variant="outlined"
            inputRef={register({ required: true, pattern: EMAIL_VALIDATION })}
            error={Boolean(errors.receiverId)}
            helperText={errors.receiverId && ERR_STR[errors.receiverId.type]}
          />
          <TextField
            type="text"
            name="subject"
            label="Subject"
            variant="outlined"
            inputRef={register({ required: true })}
            error={Boolean(errors.subject)}
            helperText={errors.subject && ERR_STR[errors.subject.type]}
          />
          <TextField
            type="text"
            name="body"
            label="Message"
            multiline
            rows={18}
            variant="outlined"
            inputRef={register({ required: true })}
            error={Boolean(errors.message)}
            helperText={errors.message && ERR_STR[errors.message.type]}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={moveToManageEmails} color="secondary" variant="contained">
          <Delete />
          Delete
        </Button>
        <Button autoFocus color="primary" variant="contained" type="submit" form="myform">
          <Send />
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComposeEmail;
