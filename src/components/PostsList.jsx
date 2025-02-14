import Post from "./Post";
import useFetch from "../hooks/useFetch";

const PostsList = () => {
  const { data, loading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h2>Liste des Posts</h2>

      {/* <button onClick={refetch}>Recharger</button> */}

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

      {data && (
        <div className="posts-container">
          {data.map((post) => (
          <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}

        </div>
      )}
    </div>
  );
};

export default PostsList;
