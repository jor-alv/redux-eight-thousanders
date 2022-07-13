import React from 'react';
import { useSelector } from 'react-redux';

export default function ActiveEightThousander() {
  const selectedEightThousander = useSelector((state) => state.selectedEightThousander);

  if (!selectedEightThousander.name) {
    return (
      <div className="active-eight-K">
        <p>Select an eight-thousander...</p>
      </div>
    );
  }

  return (
    <div className="active-eight-K">
      <h3>{selectedEightThousander.name}</h3>
      <div className="active-eight-K-details">
        <p>Height: {selectedEightThousander.height}</p>
        <p>Country: {selectedEightThousander.country}</p>
      </div>
      <img src={selectedEightThousander.imageUrl} alt={selectedEightThousander.name} width="100%" />
    </div>
  );
}
