import PropTypes from 'prop-types';
import { List, ListItem, Button, Line } from './ContactList.styled';

const ContactList = ({ filter, handleClick }) => {
  return (
    <List>
      {filter.map(({ id, name, number }) => (
        <ListItem key={id} name={name}>
          <Line>
            {name}: <span>{number}</span>
          </Line>
          <Button type="button" onClick={() => handleClick(id)}>
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
