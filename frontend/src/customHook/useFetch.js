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
        setIsLoading(false);
      } catch (error) {
        console.error('Error getting documents: ', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, isLoading, error };
};

export default useFetch;

{
  {
    /*
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
          setError(null);
        });
    }, 1000);
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
*/
  }
}
