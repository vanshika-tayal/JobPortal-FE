import React from 'react';
import { Job } from '../types/Job';
import JobCard from './JobCard';

interface JobListProps {
  jobs: Job[];
  onEdit: (job: Job) => void;
  onDelete: (id: number) => void;
  viewMode: 'grid' | 'list';
}

const JobList: React.FC<JobListProps> = ({ jobs, onEdit, onDelete, viewMode }) => {
  if (jobs.length === 0) {
    return (
      <div className="no-jobs">
        <svg className="no-jobs-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeWidth="2"/>
        </svg>
        <h3>No jobs found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className={`job-list ${viewMode}`}>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onEdit={onEdit}
          onDelete={onDelete}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default JobList;