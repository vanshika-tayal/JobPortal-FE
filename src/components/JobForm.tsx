import React, { useState, useEffect } from 'react';
import { Job } from '../types/Job';

interface JobFormProps {
  job: Job | null;
  onSubmit: (job: Job) => void;
  onCancel: () => void;
}

const jobTitleSuggestions = [
  'Software Engineer',
  'Senior Software Engineer',
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'DevOps Engineer',
  'Data Scientist',
  'Data Analyst',
  'Product Manager',
  'Project Manager',
  'UX Designer',
  'UI Designer',
  'Business Analyst',
  'Quality Assurance Engineer',
  'Mobile Developer',
  'iOS Developer',
  'Android Developer',
  'Cloud Architect',
  'Database Administrator',
  'System Administrator',
  'Network Engineer',
  'Security Engineer',
  'Machine Learning Engineer',
  'AI Engineer',
  'Technical Lead',
  'Engineering Manager',
  'Scrum Master',
  'Technical Writer',
  'Solutions Architect',
  'Web Developer',
  'React Developer',
  'Node.js Developer',
  'Python Developer',
  'Java Developer',
  'PHP Developer',
  '.NET Developer',
  'Ruby Developer',
  'Go Developer',
  'Rust Developer',
  'Marketing Manager',
  'Sales Manager',
  'HR Manager',
  'Finance Manager',
  'Operations Manager',
  'Customer Success Manager',
  'Content Writer',
  'SEO Specialist',
  'Digital Marketing Specialist',
  'Graphic Designer'
];

const JobForm: React.FC<JobFormProps> = ({ job, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Job>({
    title: '',
    company: '',
    location: '',
    description: '',
    type: '',
    experience: '',
    salary: '',
  });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (job) {
      setFormData(job);
    } else {
      setFormData({
        title: '',
        company: '',
        location: '',
        description: '',
        type: '',
        experience: '',
        salary: '',
      });
    }
  }, [job]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'title' && value.length > 0) {
      const filtered = jobTitleSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else if (name === 'title') {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setFormData((prev) => ({
      ...prev,
      title: suggestion,
    }));
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="job-form-container">
      <h2>{job ? 'Edit Job' : 'Add New Job'}</h2>
      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-group">
          <label htmlFor="title">Job Title *</label>
          <div className="autocomplete-container">
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onFocus={() => {
                if (formData.title.length > 0) {
                  const filtered = jobTitleSuggestions.filter(suggestion =>
                    suggestion.toLowerCase().includes(formData.title.toLowerCase())
                  );
                  setFilteredSuggestions(filtered);
                  setShowSuggestions(true);
                }
              }}
              required
              placeholder="e.g., Software Engineer"
              autoComplete="off"
            />
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="suggestions-dropdown">
                {filteredSuggestions.slice(0, 8).map((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="company">Company *</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="e.g., Tech Corp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="e.g., New York, NY"
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Job Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience Level</label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="">Select Experience</option>
            <option value="Entry Level">Entry Level</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5+ years">5+ years</option>
            <option value="10+ years">10+ years</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary Range</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary || ''}
            onChange={handleChange}
            placeholder="e.g., $80,000 - $120,000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Job Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            rows={5}
            placeholder="Enter job description..."
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {job ? 'Update Job' : 'Add Job'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;