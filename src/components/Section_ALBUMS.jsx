import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Section_ALBUMS = ({ match }) => {
  const userID = Number(match.params.userID);

  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const url = "https://jsonplaceholder.typicode.com/albums";
      const response = await fetch(url);
      const data = await response.json();
      const userAlbums = data.filter((album) => album.userId === userID);
      setAlbums(userAlbums);
      setLoading(false);
    };
    getAlbums();
  }, []);

  const albumsLI = albums.map((a) => (
    <li key={a.id} className="album">
      <Link to={`/${userID}/${a.id}`}>
        <div className="name">{a.title}</div>
      </Link>
    </li>
  ));

  return (
    <section>
        <h2>Albums:</h2>
      <nav>
        <Link to={`/`}>Back to Users</Link>
      </nav>
      {loading ? <div>loading...</div> : <ul>{albumsLI}</ul>}
    </section>
  );
};
