import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export const HolidayList = () => {
  // Define holiday data locally
  const [holidays] = useState([
    { id: 1, date: '2024-01-01', name: 'New Year\'s Day', description: 'Celebration of the new year.' },
    { id: 2, date: '2024-01-26', name: 'Republic Day', description: 'National holiday in India.' },
    { id: 3, date: '2024-03-29', name: 'Holi', description: 'Festival of colors.' },
    { id: 4, date: '2024-04-10', name: 'Gudi Padwa', description: 'Maharashtrian New Year.' },
    { id: 5, date: '2024-05-01', name: 'Maharashtra Day', description: 'Formation day of the state of Maharashtra.' },
    { id: 6, date: '2024-08-15', name: 'Independence Day', description: 'Celebration of India\'s independence.' },
    { id: 7, date: '2024-09-17', name: 'Ganesh Chaturthi', description: 'Festival celebrating Lord Ganesha.' },
    { id: 8, date: '2024-10-02', name: 'Gandhi Jayanti', description: 'Birthday of Mahatma Gandhi.' },
    { id: 9, date: '2024-11-01', name: 'Diwali', description: 'Festival of lights.' },
    { id: 10, date: '2024-12-25', name: 'Christmas', description: 'Celebration of Christmas.' },
   
 
 
  ]);
 
  return (
    <div className="container mt-5">
      <h2>Holiday List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Holiday Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map(holiday => (
            <tr key={holiday.id}>
              <td>{new Date(holiday.date).toLocaleDateString()}</td>
              <td>{holiday.name}</td>
              <td>{holiday.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 