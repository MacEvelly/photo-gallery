import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Section_GALLERY = ({ match }) => {
  const userID = Number(match.params.userID);
  const albumID = Number(match.params.albumID);

  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const getGallery = async () => {
      const url = "https://jsonplaceholder.typicode.com/photos";
      const response = await fetch(url);
      const data = await response.json();
      const userAlbums = data.filter((album) => album.albumId === albumID);
      setGallery(userAlbums);
      setLoading(false);
    };
    getGallery();
  }, []);

  const galleryLI = gallery.map((i) => (
    <li key={i.id} className="photo">
      <img src={i.thumbnailUrl} alt={i.title} />
    </li>
  ));

  return (
    <section>
        <h2>Gallery:</h2>
      <nav>
        <Link to={`/`}>Back to Users</Link>
        <Link to={`/${userID}`}>Back to Albums</Link>
      </nav>
      {loading ? <div>loading...</div> : <ul>{galleryLI}</ul>}
    </section>
  );
};
