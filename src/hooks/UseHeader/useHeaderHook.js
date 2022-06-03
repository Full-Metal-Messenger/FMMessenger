import React, { useEffect, useState } from 'react';
import { client } from '../../services/client';
import { getProfileById, updateUserName } from '../../services/messages';
import useToastAlert from '../useToast/useToastAlert';
import { logout } from '../../services/auth';
import { useHistory } from 'react-router-dom';

export default function useHeaderHook() {
  const { id } = useParams();
  const [light, setLight] = useState(true);
  const [usersProfile, setUsersProfile] = useState('');
  const [room, setRoom] = useState({});

  const history = useHistory();
  const { user, setCurrentUser, setEmail, setPassword, setusername } =
    useAuthContext();
  const { setToastMessage } = useToastAlert();
  const handleSubmit = () => {
    logout();
    history.push('/auth');
    setCurrentUser('');
    setEmail('');
    setPassword('');
    setusername('');
  };

  useEffect(() => {
    if (id === null) {
      return;
    }
    getProfileById(user.id).then(({ username }) => setUsersProfile(username));
  }, []);
  useEffect(() => {
    const getData = async () => {
      const { body } = await client
        .from('rooms')
        .select()
        .match({ id })
        .single();
      setRoom(body);
    };
    getData();
  }, [id]);

  const handleProfileEdit = async () => {
    await updateUserName(usersProfile);
    onClose();
    setToastMessage({
      position: 'top',
      description: `UserName Changed to ${usersProfile}`,
      status: 'success',
    });
    setToastMessage('');
  };
  return {
    light,
    setLight,
    room,
    setRoom,
    usersProfile,
    setUsersProfile,
    handleSubmit,
    handleProfileEdit,
  };
}
