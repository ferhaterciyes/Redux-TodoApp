import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/actions/todoActions';

const ThemeButton = () => {
  const dispatch = useDispatch();
  const handleThemeChange = (e) => {
    const newTheme = e.target.checked === true ? "#fff" : "#000000";

    dispatch(setTheme(newTheme));
   
  };

  return (
    <div className="wrapper absolute top-5 right-5">
      <input
        type="checkbox"
        name="checkbox"
        className="switch"
        onChange={handleThemeChange} 
      />
    </div>
  );
};

export default ThemeButton;
