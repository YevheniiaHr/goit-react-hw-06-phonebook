import { useDispatch } from 'react-redux';
import { ListItem, Button } from './ListItem.styled';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => removeContact(id)}>
        Delete
      </Button>
    </ListItem>
  );
};
export default ContactItem;
