import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
function Menu(props) {
  return (
    <>
      {props.menuItems.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </>
  );
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

export default Menu;
