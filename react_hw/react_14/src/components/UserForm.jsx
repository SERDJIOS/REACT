import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../redux/actions';
import './UserForm.css'; // Подключаем файл с CSS-стилями

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ name, status });
    setName('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form-title">Edit User Information</h2>
      <div className="form-group">
        <label className="form-label">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Status
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-input"
          />
        </label>
      </div>
      <button type="submit" className="form-button">Update</button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);
