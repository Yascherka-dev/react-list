import useFetch from "../hooks/useFetch";
import Post from "./Post";

function PostsList() {
  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return (
    <div className="loader">
      <div></div><div></div><div></div>
    </div>
  );
  
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <button onClick={refetch}> Recharger </button>
      <div className="grid gap-4">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;
