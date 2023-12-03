import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { getFilteredContacts } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilteredContacts);

  const handleOnChange = e => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        name="filter"
        type="text"
        value={filterValue}
        onChange={handleOnChange}
      ></Input>
    </Label>
  );
};
export default Filter;
