import React from 'react';

export default function useHeaderHook() {
  const { toggleColorMode } = useColorMode();
  const { id } = useParams();
  const [light, setLight] = useState(true);
  const [usersProfile, setUsersProfile] = useState('');
  const { isOpen, onToggle, onClose } = useDisclosure();
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
  return <div>useHeaderHook</div>;
}
