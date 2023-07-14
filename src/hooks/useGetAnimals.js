import { useEffect, useState } from 'react';
import { getAnimals } from 'services/animals';

function useGetAnimals(params) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setIsLoading(true);

    const { data, error } = await getAnimals(params);

    let shuffledArray = [...data, ...data].sort(() => Math.random() * 2 - 0.5);

    setError(error);
    setData(shuffledArray);

    setIsLoading(false);
  };

  return [data, { error, isLoading, refetch: fetchData }];
}

export default useGetAnimals;
