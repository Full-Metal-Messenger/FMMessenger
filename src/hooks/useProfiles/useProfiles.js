import { useEffect, useState } from 'react';
import { getProfiles } from '../../services/messages';

function useProfiles() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const findPeople = async () => {
      const data = await getProfiles();
      console.log(data);
      setPerson(data);
    };
    findPeople();
  }, []);

  return { person };
}
export default useProfiles;
