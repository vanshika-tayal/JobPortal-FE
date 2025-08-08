import React from 'react';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterType: string;
  onFilterChange: (value: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalJobs: number;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterChange,
  viewMode,
  onViewModeChange,
  totalJobs
}) => {
  return (
    <div className="search-filter">
      <div className="search-section">
        <div className="search-input-wrapper">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" strokeWidth="2"/>
            <path d="M21 21l-4.35-4.35" strokeWidth="2"/>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search jobs, companies, or locations..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => onSearchChange('')}
            >
              ×
            </button>
          )}
        </div>
        
        <select 
          className="filter-select"
          value={filterType}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        
        <div className="view-toggle">
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => onViewModeChange('grid')}
            title="Grid View"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="7" height="7" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" strokeWidth="2"/>
            </svg>
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => onViewModeChange('list')}
            title="List View"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="8" y1="6" x2="21" y2="6" strokeWidth="2"/>
              <line x1="8" y1="12" x2="21" y2="12" strokeWidth="2"/>
              <line x1="8" y1="18" x2="21" y2="18" strokeWidth="2"/>
              <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="2"/>
              <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="2"/>
              <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="search-info">
        <span className="result-count">
          {totalJobs} {totalJobs === 1 ? 'job' : 'jobs'} found
        </span>
      </div>
    </div>
  );
};

export default SearchFilter;