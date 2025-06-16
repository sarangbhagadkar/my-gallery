import React from 'react';

function LoadMoreButton({ loadMore }) {
  return (
    <div className="text-center my-4">
      <button className="btn btn-primary" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
