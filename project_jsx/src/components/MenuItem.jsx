import PropTypes from "prop-types";

function MenuItem(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default MenuItem;
