import PropTypes from 'prop-types';
import { List, ListItem, Button, Line } from './ContactList.styled';

const ContactList = ({ filter, handleClick }) => {
  return (
    <List>
      {filter.map(contact => (
        <ListItem key={contact.id} name={contact.name}>
          <Line>
            {contact.name}: <span>{contact.number}</span>
          </Line>
          <Button type="button" onClick={() => handleClick(contact.id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func.isRequired,
};

export default ContactList;
