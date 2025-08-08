import React, { useState } from 'react';
import { Job } from '../types/Job';
import DeleteDialog from './DeleteDialog';

interface JobCardProps {
  job: Job;
  onEdit: (job: Job) => void;
  onDelete: (id: number) => void;
  viewMode: 'grid' | 'list';
}

const JobCard: React.FC<JobCardProps> = ({ job, onEdit, onDelete, viewMode }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = () => {
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    onDelete(job.id!);
    setShowDeleteDialog(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const formatDate = (date: string | undefined) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <>
      <DeleteDialog
        isOpen={showDeleteDialog}
        jobTitle={job.title}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
      <div className={`job-card ${viewMode}`}>
      {viewMode === 'grid' ? (
        <>
          <div className="job-card-header">
            <div className="job-badge">{job.type || 'Full-time'}</div>
            <div className="job-actions">
              <button className="action-btn edit" onClick={() => onEdit(job)} title="Edit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeWidth="2"/>
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="2"/>
                </svg>
              </button>
              <button className="action-btn delete" onClick={handleDelete} title="Delete">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="job-card-body">
            <h3 className="job-title">{job.title}</h3>
            <div className="job-company">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" strokeWidth="1.5"/>
              </svg>
              {job.company}
            </div>
            <div className="job-location">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="1.5"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="1.5"/>
              </svg>
              {job.location}
            </div>
            
            <button 
              className="view-details-btn"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide Details' : 'View Details'}
              <svg 
                className={`chevron ${showDetails ? 'rotate' : ''}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" strokeWidth="2"/>
              </svg>
            </button>
            
            {showDetails && (
              <div className="job-details">
                {job.experience && (
                  <div className="detail-item">
                    <strong>Experience:</strong> {job.experience}
                  </div>
                )}
                {job.salary && (
                  <div className="detail-item">
                    <strong>Salary:</strong> {job.salary}
                  </div>
                )}
                {job.description && (
                  <div className="detail-item">
                    <strong>Description:</strong>
                    <p>{job.description}</p>
                  </div>
                )}
                <div className="detail-item">
                  <strong>Posted:</strong> {formatDate(job.createdAt)}
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="job-card-header">
            <div className="job-badge">{job.type || 'Full-time'}</div>
          </div>
          
          <div className="job-card-body">
            <h3 className="job-title">{job.title}</h3>
            <div className="job-company">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" strokeWidth="1.5"/>
              </svg>
              {job.company}
            </div>
            <div className="job-location">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="1.5"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="1.5"/>
              </svg>
              {job.location}
            </div>
            
            <div className="job-meta">
              {job.experience && (
                <span className="meta-item">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5"/>
                  </svg>
                  {job.experience}
                </span>
              )}
              {job.salary && (
                <span className="meta-item">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5"/>
                  </svg>
                  {job.salary}
                </span>
              )}
            </div>
          </div>
          
          <div className="job-actions">
            <button className="action-btn edit" onClick={() => onEdit(job)} title="Edit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeWidth="2"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="2"/>
              </svg>
            </button>
            <button className="action-btn delete" onClick={handleDelete} title="Delete">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </>
      )}
      </div>
    </>
  );
};

export default JobCard;