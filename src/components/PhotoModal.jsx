import React from 'react';

function PhotoModal({ photo, closeModal }) {
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="btn btn-danger close-btn" onClick={closeModal}>
          X
        </button>
        <img src={photo.url} alt={photo.title} className="img-fluid" />
        <h5 className="mt-2">{photo.title}</h5>
      </div>
    </div>
  );
}

export default PhotoModal;