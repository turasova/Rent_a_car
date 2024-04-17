import { Form } from 'components/Form/FormAddContact/Form';
import css from './ContactsPage.module.css';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/loader';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContactValue, getIsLoading } from 'store/contactsSlice';
import { EmptyContactsList } from 'components/EmptyContactList/EmptyContactList';
import defaultPhonebook from '../../../images/bookphone.png';
import defaultAvatarContact from '../../../images/contacts.png';

const ContactsPage = () => {
  const contactIsLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContactValue);
  const phonebook = defaultPhonebook;
  const avatarContact = defaultAvatarContact;

  return (
    <div>
      {contactIsLoading && <Loader />}
      <div className={css.phonebookWrapper}>
        <div className={css.phone}>
          <img src={phonebook} alt="phonebook" width={54} />
        </div>
        <Form />
      </div>
      <div className={css.contactsWrapper}>
        <div className={css.phone}>
          <img src={avatarContact} alt="avatarContact" width={54} />
        </div>
        <Filter />
        <ContactList />
        {contacts.length === 0 && <EmptyContactsList />}
      </div>
    </div>
  );
};
export default ContactsPage;
