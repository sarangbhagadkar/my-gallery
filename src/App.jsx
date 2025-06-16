import React, { useState, useEffect } from 'react';
import PhotoCard from './components/PhotoCard';
import PhotoModal from './components/PhotoModal';
import LoadMoreButton from './components/LoadMoreButton';
import './App.css';

function App() {

  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);


  // fetch photos from API
  const fetchPhotos = async () => {
    setLoading(true); 
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20`
      );
      const newPhotos = await response.json();
      setPhotos([...photos, ...newPhotos]); 
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
    setLoading(false); 
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };


  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const loadMore = () => {
    setStart(start + 10); 
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Photo Gallery</h1>

      <div className="row ">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} openModal={openModal} />
        ))}
      </div>
    
      {loading && <p className="text-center">Loading photos...</p>}
      
      <LoadMoreButton loadMore={loadMore} />
     
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;