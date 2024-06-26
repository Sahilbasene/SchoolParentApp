import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const Circulars = () => {
  const [circulars, setCirculars] = useState([]);
  const [selectedCircular, setSelectedCircular] = useState(null);
 
  useEffect(() => {
    fetchCirculars();
  }, []);
 
  const fetchCirculars = () => {
    axios.get('https://localhost:7051/api/Circulars')
      .then(response => setCirculars(response.data))
      .catch(error => console.error('Error fetching circulars:', error));
  };
 
  const acknowledgeCircular = (id) => {
    axios.put(`https://localhost:7051/api/Circulars/${id}/acknowledge`)
      .then(response => {
        if (response.status === 204) {
          setCirculars(circulars.map(c => c.id === id ? { ...c, acknowledged: true } : c));
        } else {
          alert('Error acknowledging circular');
        }
      })
      .catch(error => console.error('Error acknowledging circular:', error));
  };
 
  return (
    <div className="container mt-4">
      <h2>Circulars</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>InformationText</th>
            <th>informationPostedBy</th>
            <th>Notification Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {circulars.map(circular => (
            <tr key={circular.id}>
              <td>{circular.id}</td>
              <td>{circular.informationText}</td>
              <td>{circular.notificationPostedBy}</td>
              <td>{new Date(circular.notificationDate).toLocaleDateString()}</td>
              <td>
                {circular.acknowledged ? (
                  <span>Acknowledged</span>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => acknowledgeCircular(circular.id)}
                  >
                    Acknowledge
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Circulars;