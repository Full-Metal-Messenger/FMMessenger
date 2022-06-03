import { useEffect, useRef, useState } from 'react';
import { getProfiles } from '../../services/messages';

function useProfiles() {
  const addRef = useRef();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const findPeople = async () => {
      const data = await getProfiles();
      setPerson(data);
    };
    findPeople();
  }, []);

  return { person, addRef };
}
export default useProfiles;
