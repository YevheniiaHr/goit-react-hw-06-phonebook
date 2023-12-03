import ContactForm from './Form/Form';
import { Container, Section, Title, SectionTitle, Message } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <Section>
        <SectionTitle>Add contact</SectionTitle>
        <ContactForm />
      </Section>
      <Section>
        <SectionTitle>Contacts</SectionTitle>
        {contacts.length !== 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Message>
            There are no contacts in your phonebook. Please add your first
            contact!
          </Message>
        )}
      </Section>
    </Container>
  );
};
