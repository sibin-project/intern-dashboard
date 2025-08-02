import React, { useEffect, useState } from 'react';
import Dashboardcss from './Dashbord.css'

function Dashboard() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

     const rewards = [
    { icon: '🎉', title: 'T-shirt', unlockedAt: '₹5,000' },
    { icon: '🎓', title: 'Certificate', unlockedAt: '₹10,000' },
    { icon: '🏅', title: 'Medal', unlockedAt: '₹20,000' },
    { icon: '🚀', title: 'Internship Badge', unlockedAt: '₹30,000' }
  ];
  useEffect(() => {
    fetch('http://127.0.0.1:8000/intern')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setInterns(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Intern Dashboard</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Referral Code</th>
            <th>Donations</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((int, i) => (
            <tr key={i}>
              <td>{int.name}</td>
              <td>{int.referral_code}</td>
              <td>₹{int.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
            <h3 className="section-heading">Rewards & Unlockables</h3>
      <div className="rewards-grid">
        {rewards.map((reward, index) => (
          <div key={index} className="reward-card">
            <div className="reward-icon">{reward.icon}</div>
            <div className="reward-title">{reward.title}</div>
            <div className="reward-unlock">Unlocked at {reward.unlockedAt}</div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Dashboard;
