import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContacForm/ContacForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const LOCALSTOREG_KEY = 'contact';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCALSTOREG_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem(LOCALSTOREG_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const onFilter = ev => {
    console.log(ev.currentTarget.value);
    setFilter(ev.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(cont => cont.id !== id));
  };

  const handleAdd = formdate => {
    const { name, number } = formdate;

    if (contacts.find(elem => elem.name === name)) {
      alert(`Person with name ${name} is in a date`);
      return;
    }

    setContacts(contacts => [...contacts, { id: nanoid(5), name, number }]);
  };

  const filterContacts = contacts.filter(cont => {
    console.log('filtr');
    return cont.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <ContactForm onSubmit={handleAdd} contacts={contacts} />
      <Filter filter={filter} func={onFilter} len={contacts} />
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item>
            <Contacts props={filterContacts} delCont={deleteContact} />
          </Item>
        </Stack>
      </Box>
    </div>
  );
}
