import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/reducers/auth';

import styles from './AuthForm.module.scss';

export const AuthForm = ({ setOpen }) => {
  const [nickname, setNickname] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn({ nickname: nickname }));

    setNickname('');

    setOpen(false);
  };

  return (
    <div className={styles.modal}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="your nickname"
        />

        <button type="submit">Log In</button>
      </form>

      <button onClick={() => setOpen(false)}>Close</button>
    </div>
  );
};
