import React from 'react';
import { Job } from '../types/Job';

interface DashboardProps {
  stats: {
    totalJobs: number;
    companies: number;
    locations: number;
    types: Record<string, number>;
  };
  jobs: Job[];
}

const Dashboard: React.FC<DashboardProps> = ({ stats, jobs }) => {
  const recentJobs = jobs.slice(0, 5);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p>Monitor your job portal statistics</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#3b82f6' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 7h-9m3 5h6m-9 5h9M4 7l4 4-4 4" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.totalJobs}</span>
            <span className="stat-label">Total Jobs</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#10b981' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.companies}</span>
            <span className="stat-label">Companies</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#f59e0b' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.locations}</span>
            <span className="stat-label">Locations</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#8b5cf6' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-value">{Object.keys(stats.types).length}</span>
            <span className="stat-label">Job Types</span>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="chart-container">
          <h3>Job Type Distribution</h3>
          <div className="chart">
            {Object.entries(stats.types).map(([type, count]) => (
              <div key={type} className="chart-bar">
                <span className="chart-label">{type}</span>
                <div className="chart-bar-wrapper">
                  <div 
                    className="chart-bar-fill" 
                    style={{ width: `${(count / stats.totalJobs) * 100}%` }}
                  >
                    <span className="chart-value">{count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="recent-jobs">
          <h3>Recent Jobs</h3>
          <div className="recent-jobs-list">
            {recentJobs.map((job) => (
              <div key={job.id} className="recent-job-item">
                <div className="recent-job-info">
                  <h4>{job.title}</h4>
                  <p>{job.company} • {job.location}</p>
                </div>
                <span className="recent-job-type">{job.type || 'Not specified'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;