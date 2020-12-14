import React, { useState } from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
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
// import Navbar from '../../parts/Navbar';
import { emailValidation, composeEmailErrStr } from '../../constants';

const ComposeEmail = () => {
  const [open, setOpen] = useState(true);
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {};

  const handleClose = () => {
    setOpen(false);
    history.push('/manage-emails');
  };

  return (
    <Dialog
      className="compose-email"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" disableTypography>
        <Typography variant="h5">Compose Email</Typography>
        <IconButton aria-label="close" onClick={handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} id="myform">
          <TextField
            type="text"
            name="receiverId"
            label="Receiver id (Email)"
            variant="outlined"
            inputRef={register({ required: true, pattern: emailValidation })}
            error={Boolean(errors.receiverId)}
            helperText={errors.receiverId && composeEmailErrStr[errors.receiverId.type]}
          />
          <TextField
            type="text"
            name="senderId"
            label="Sender id (email)"
            variant="outlined"
            inputRef={register({ required: true, pattern: emailValidation })}
            error={Boolean(errors.senderId)}
            helperText={errors.senderId && composeEmailErrStr[errors.senderId.type]}
          />
          <TextField
            type="text"
            name="subject"
            label="Subject"
            variant="outlined"
            inputRef={register({ required: true })}
            error={Boolean(errors.subject)}
            helperText={errors.subject && composeEmailErrStr[errors.subject.type]}
          />
          <TextField
            type="text"
            name="message"
            label="Message"
            multiline
            rows={18}
            variant="outlined"
            inputRef={register({ required: true })}
            error={Boolean(errors.message)}
            helperText={errors.message && composeEmailErrStr[errors.message.type]}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary" variant="contained">
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

// const ComposeEmail = () => {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {};

//   return (
//     <div className="compose-email page">
//       {/* <Navbar /> */}
//       <h1>Compose Email</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <TextField
//           type="text"
//           name="receiverId"
//           label="Receiver id (Email)"
//           variant="outlined"
//           inputRef={register({ required: true, pattern: emailValidation })}
//           error={Boolean(errors.receiverId)}
//           helperText={errors.receiverId && composeEmailErrStr[errors.receiverId.type]}
//         />
//         <TextField
//           type="text"
//           name="senderId"
//           label="Sender id (email)"
//           variant="outlined"
//           inputRef={register({ required: true, pattern: emailValidation })}
//           error={Boolean(errors.senderId)}
//           helperText={errors.senderId && composeEmailErrStr[errors.senderId.type]}
//         />
//         <TextField
//           type="text"
//           name="subject"
//           label="Subject"
//           variant="outlined"
//           inputRef={register({ required: true })}
//           error={Boolean(errors.subject)}
//           helperText={errors.subject && composeEmailErrStr[errors.subject.type]}
//         />
//         <TextField
//           type="text"
//           name="message"
//           label="Message"
//           multiline
//           rows={18}
//           variant="outlined"
//           inputRef={register({ required: true })}
//           error={Boolean(errors.message)}
//           helperText={errors.message && composeEmailErrStr[errors.message.type]}
//         />

//         <Button variant="contained" color="primary" type="submit">
//           Send
//         </Button>

//         {/* <TextField
//             inputRef={register({ required: true })}
//             label="סיסמא"
//             type="password"
//             name="password"
//             error={Boolean(errors.password)}
//             helperText={errors.password && inputErrStr[errors.password.type]}
//           /> */}
//       </form>
//     </div>
//   );
// };

export default ComposeEmail;
