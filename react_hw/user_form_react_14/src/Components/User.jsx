
import React from 'react';
import { connect } from 'react-redux';

const User = ({ name, status }) => (
  <div>
    <h2>User Profile</h2>
    <h3>User Information</h3>
    <p>Name: {name}</p>
    <p>Status: {status}</p>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
