import React from 'react';

interface SidebarProps {
  onAddNew: () => void;
  onDashboard: () => void;
  onJobs: () => void;
  activeView: 'jobs' | 'add' | 'dashboard';
}

const Sidebar: React.FC<SidebarProps> = ({ onAddNew, onDashboard, onJobs, activeView }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">JP</div>
        <span className="logo-text">JobPortal</span>
      </div>
      
      <nav className="sidebar-nav">
        <button 
          className={`sidebar-btn ${activeView === 'add' ? 'active' : ''}`}
          onClick={onAddNew}
        >
          <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2"/>
            <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2"/>
          </svg>
          <span>Add Job</span>
        </button>
        
        <button 
          className={`sidebar-btn ${activeView === 'jobs' ? 'active' : ''}`}
          onClick={onJobs}
        >
          <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
          </svg>
          <span>Jobs</span>
        </button>
        
        <button 
          className={`sidebar-btn ${activeView === 'dashboard' ? 'active' : ''}`}
          onClick={onDashboard}
        >
          <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="7" height="7" strokeWidth="2"/>
            <rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
            <rect x="3" y="14" width="7" height="7" strokeWidth="2"/>
            <rect x="14" y="14" width="7" height="7" strokeWidth="2"/>
          </svg>
          <span>Dashboard</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;