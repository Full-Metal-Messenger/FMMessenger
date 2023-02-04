import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { signInUser, signUpUser } from '../../services/auth';
import useToastAlert from '../useToast/useToastAlert';

export default function useAuthForm() {
  const history = useHistory();
  const { email, password, type, setError, username, setUser } =
    useAuthContext();

  const { setToastMessage } = useToastAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type) {
        const data = await signInUser(email, password);
        setUser(data);

        setToastMessage({
          position: 'top',
          description: `Welcome Back.`,
          status: 'info',
        });
        setToastMessage('');
        history.push('/');
      } else {
        // const data = await signInUser({ email, password }, username);
        // setUser(data)
        //   .then(
        //     setToastMessage({
        //       position: 'top',
        //       description: `Congratulations ${username}! Your FMM account has been registered.`,
        //       status: 'success',
        //     })
        //   )
        //   .then(setToastMessage(''))
        //   .finally(history.push('/'));
        const data = await signUpUser({ email, password }, username);
        setUser(data);
        setToastMessage({
          position: 'top',
          description: `Congratulations ${username}! Your FMM account has been registered.`,
          status: 'success',
        });
        setToastMessage('');
        history.push('/');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return {
    email,
    password,
    type,
    setError,
    username,
    handleSubmit,
  };
}
