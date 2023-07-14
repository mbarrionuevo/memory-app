import { useEffect, useState } from 'react';
import { getAnimals } from 'services/animals';

function useGetAnimals() {
  const [data, setData] = useState([]);
  const [problem, setProblem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);

    const { data, problem } = await getAnimals();

    let shuffledArray = [...data, ...data].sort(() => Math.random() - 0.9);

    setProblem(problem);
    setData(shuffledArray);

    setIsLoading(false);
  };

  return [data, { problem, isLoading, refetch: fetchData }];
}

export default useGetAnimals;
