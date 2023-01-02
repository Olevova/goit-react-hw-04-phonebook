import React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import style from './ContacForm.module.scss';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleName = ev => {
    switch (ev.currentTarget.name) {
      case 'name':
        setName(ev.currentTarget.value);
        break;
      case 'number':
        setNumber(ev.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    if (contacts.find(i => i.name === name)) {
      return;
    }
    reset();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '100%',
        },
      }}
    >
      <Paper elevation={3}>
        <form onSubmit={handleSubmit}>
          <label className={style.labelEl}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={style.labelEl}>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleName}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              style={{
                color: '#f0ffff',
                borderColor: '#f0ffff',
                backgroundColor: 'rgb(136, 169, 157)',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
              type="submit"
            >
              Add Contact
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
