import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const PostSingle = () => {
  const { id } = useParams();  
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);  

  
  if (loading) return <div>Chargement...</div>;

  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>  
    </div>
  );
};

export default PostSingle;
