import React, { useEffect, useState } from 'react';
import { client } from '../../services/client';
import { getProfileById, updateUserName } from '../../services/messages';
import useToastAlert from '../useToast/useToastAlert';
import { logout } from '../../services/auth';
import { useHistory, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { useDisclosure } from '@chakra-ui/react';

export default function useHeaderHook() {
  const { id } = useParams();
  const [light, setLight] = useState(true);
  const [usersProfile, setUsersProfile] = useState('');
  const [room, setRoom] = useState(null);
  const { onClose, isOpen, onToggle } = useDisclosure();

  const history = useHistory();
  const {
    user,
    setUser,
    setEmail,
    setPassword,
    setusername,
    defaultState,
    setDefaultState,
  } = useAuthContext();
  const { setToastMessage } = useToastAlert();
  const handleSubmit = () => {
    logout();
    history.push('/auth');
    setUser('');
    setEmail('');
    setPassword('');
    setusername('');
    setDefaultState({ id: '', username: '' });
  };

  useEffect(() => {
    setUsersProfile(user.user_metadata.username || defaultState.username);
  }, []);
  useEffect(() => {
    const getData = async () => {
      if (id?.length) {
        const { data } = await client
          .from('rooms')
          .select()
          .match({ id })
          .single();
        setRoom(data);
      }
      return;
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
    isOpen,
    onToggle,
    onClose,
    light,
    setLight,
    room,
    usersProfile,
    setUsersProfile,
    handleSubmit,
    handleProfileEdit,
  };
}
