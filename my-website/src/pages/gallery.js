import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './gallery.css';

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/images/');
        setImageUrls(response.data.urls);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

return (
    <div className="image-gallery">
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
