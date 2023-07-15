import { useEffect, useState } from 'react';
import { getAnimals } from 'services/animals';

function useGetAnimals(params) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);

    const { data, error } = await getAnimals(params);

    setError(error);
    setData(data);

    setIsLoading(false);
  };

  return [data, { error, isLoading, refetch: fetchData }];
}

export default useGetAnimals;
