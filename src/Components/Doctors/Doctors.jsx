import React, { useState } from 'react';
import Doctor from './Doctor';

const Doctors = ({ doctorsdata }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleDoctors = showAll ? doctorsdata : doctorsdata.slice(0, 9);

  return (
    <div className="my-10">
      <h2 className="text-2xl text-center font-bold">Our Best Doctors</h2>
      <p className="text-gray-400 mx-auto text-center md:w-10/12 py-2">
        Our platform connects you with verified, experienced doctors across various specialties — 
        all at your convenience. Whether it's a routine checkup or urgent consultation, 
        book appointments in minutes and receive quality care you can trust.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {visibleDoctors.map((doctordata) => (
          <Doctor key={doctordata.id} doctordata={doctordata} />
        ))}
      </div>
      {doctorsdata.length > 9 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-outline btn-primary"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Doctors;