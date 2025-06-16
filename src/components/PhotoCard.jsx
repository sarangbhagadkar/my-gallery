import React from 'react';

function PhotoCard({ photo, openModal }) {
  return (
    <div className=" col-md-4 mb-3">
      <div className="card">
        <img
          src={photo.thumbnailUrl}
          className="card-img-top"
          alt={photo.title}
          onClick={() => openModal(photo)}
          style={{ cursor: 'pointer' }}
        />
        <div className="card-body">
          <p className="card-text">{photo.title}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
// This component represents a single photo card in the gallery.