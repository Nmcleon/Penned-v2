import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const useFetch = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setData(docs);
        console.log('Fetched data:', data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error getting documents: ', error);
        setError(error.message);
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, isLoading, error };
};

export default useFetch;
