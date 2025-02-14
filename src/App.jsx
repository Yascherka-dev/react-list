import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>📜 Liste des Posts</h1>

    
      {/* <button onClick={refetch} disabled={loading}>
        {loading ? "Chargement..." : "Recharger"}
      </button> */}

   
      {error && <p className="error">Erreur : {error}</p>}
      
      
      {data && data.length > 0 ? (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun post à afficher.</p>
      )}
    </div>
  );
};

export default App;
