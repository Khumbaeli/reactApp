import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './climb.css';

const Climb = () => {
  const [climbs, setClimbs] = useState([]);
  const [newClimb, setNewClimb] = useState({ location: '', climb: '', grade: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchClimbs = async () => {
      try {
        const response = await axios.get('https://website-t922.onrender.com/climbs');
        setClimbs(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchClimbs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClimb({ ...newClimb, [name]: value });
  };

  const handleAddClimb = async () => {
    try {
      const response = await axios.post('https://website-t922.onrender.com/climbs/', newClimb);
      setClimbs([...climbs, response.data]);
      setNewClimb({ location: '', climb: '', grade: '' });
    } catch (error) {
      console.error('Error adding climb:', error);
    }
  };

  const handleDeleteClimb = async (id) => {
    try {
      await axios.delete(`https://website-t922.onrender.com/climbs/${id}`);
      setClimbs(climbs.filter(climb => climb.id !== id));
    } catch (error) {
      console.error('Error deleting climb:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='c'>
      <h2>Climbing Locations and Grades</h2>
      <div>
        <input
          type="text"
          name="location"
          value={newClimb.location}
          onChange={handleInputChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="climb"
          value={newClimb.climb}
          onChange={handleInputChange}
          placeholder="Climb"
        />
        <input
          type="text"
          name="grade"
          value={newClimb.grade}
          onChange={handleInputChange}
          placeholder="Grade"
        />
        <button onClick={handleAddClimb}>Add Climb</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Climb</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {climbs.map((climb) => (
            <tr key={climb.id}>
              <td>{climb.location}</td>
              <td>{climb.climb}</td>
              <td>{climb.grade}</td>
              <td>
                <button onClick={() => handleDeleteClimb(climb.climb)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Climb;
