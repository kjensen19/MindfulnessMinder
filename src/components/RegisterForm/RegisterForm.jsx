import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Register.css'

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contact, setContact] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registerUser = (event) => {
    console.log('HERE?')
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        name: name,
        email: email,
        phone: phone,
        contact: contact
      },
    });
  }; // end registerUser

  return (
    <div>
    <Button variant="outlined" onClick={handleClickOpen}>
      Click to Register
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent color='primary'>
        <form className="formPanel" onSubmit={registerUser}>
          <h2>Register User</h2>
            {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
            )}
          <div>
            <label htmlFor="username">
              Username:
            <input
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
            </label>
          </div>
          <div>
            <label htmlFor="name">
              First and Last Name:
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
            />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email Address:
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone Number:
            <input
              type="tel"
              name="phone"
              value={phone}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
              onChange={(event) => setPhone(event.target.value)}
            />
            </label>
          </div>
          <div>
            <label htmlFor="contact">
              Is it okay to contact you?
            <input
              type="text"
              name="contact"
              value={contact}
              required
              onChange={(event) => setContact(event.target.value)}
            />
            </label>
          </div>
          <Button onClick={handleClose} variant="outlined">Cancel</Button>
        <Button onClick={handleClose} variant="outlined" name="submit" type="submit">Register</Button>
        </form>
      </DialogContent>
      <DialogActions>
     
      </DialogActions>
    </Dialog>
  </div>
);
  
}

export default RegisterForm;

