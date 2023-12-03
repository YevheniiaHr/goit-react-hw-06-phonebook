import ContactItem from 'components/ListItem/ListItem';
import { List } from './ContactList.styled';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
