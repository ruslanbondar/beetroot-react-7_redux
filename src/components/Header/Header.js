import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { logOut, logIn } from 'store/reducers/auth';

import styles from './Header.module.scss';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const nickname = useSelector((state) => state.authReducer.nickname);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const nickname = localStorage.getItem('nickname');

    if (token && nickname) dispatch(logIn({ nickname: nickname }));

    if (!token && !nickname) dispatch(logOut());
  }, [isLoggedIn]);

  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      {nickname ? <h2>Hello, {nickname}</h2> : <h2></h2>}

      {!isLoggedIn ? (
        <button onClick={() => setOpen(true)}>Log In</button>
      ) : (
        <button onClick={() => dispatch(logOut())}>Log Out</button>
      )}

      {open && <AuthForm setOpen={setOpen} />}
    </header>
  );
};
