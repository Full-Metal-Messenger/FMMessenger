const useLocalStorage = () => {
  const {
    currentSession: {
      user: {
        id,
        user_metadata: { username },
      },
    },
  } = JSON.parse(localStorage.getItem('supabase.auth.token'));
  return { id, username };
};

export default useLocalStorage;
