import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './gallery.css';

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://website-t922.onrender.com/images/');
        setImageUrls(response.data.urls);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="image-gallery">
      <h1 className="artsy-heading">Film photography is a chemical miracle.</h1>
      <div className="gallery">
        {imageUrls.map((url, index) => {
          const imageName = decodeURIComponent(url.split('/').pop());
          return (
            <div key={index} className="image-container">
              <img src={url.startsWith('http') ? url : `http://${url}`} alt={imageName} />
              <div className="image-name">{imageName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default Gallery;
