import React from 'react';
import useFetch from '../hooks/useFetch';

const PostsList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');  


  if (loading) return <div>Chargement...</div>;

  
  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <div>
      <h1>Liste des Posts</h1>
      <ul>
        {data && data.map(post => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a> 
            <p>{post.body}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
