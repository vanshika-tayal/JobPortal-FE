import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SearchFilter from './components/SearchFilter';
import Footer from './components/Footer';
import { Job } from './types/Job';
import { jobService } from './services/api';
import './App.css';

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [activeView, setActiveView] = useState<'jobs' | 'add' | 'dashboard'>('jobs');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, searchTerm, filterType]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const data = await jobService.getAllJobs();
      setJobs(data);
    } catch (error) {
      toast.error('Failed to fetch jobs');
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterJobs = () => {
    let filtered = [...jobs];
    
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== 'all') {
      filtered = filtered.filter(job => job.type === filterType);
    }

    setFilteredJobs(filtered);
  };

  const handleAddNew = () => {
    setSelectedJob(null);
    setActiveView('add');
  };

  const handleEdit = (job: Job) => {
    setSelectedJob(job);
    setActiveView('add');
  };

  const handleDelete = async (id: number) => {
    try {
      await jobService.deleteJob(id);
      toast.success('Job deleted successfully');
      fetchJobs();
    } catch (error) {
      toast.error('Failed to delete job');
      console.error('Error deleting job:', error);
    }
  };

  const handleSubmit = async (job: Job) => {
    try {
      if (selectedJob && selectedJob.id) {
        await jobService.updateJob(selectedJob.id, job);
        toast.success('Job updated successfully');
      } else {
        await jobService.createJob(job);
        toast.success('Job created successfully');
      }
      setActiveView('jobs');
      setSelectedJob(null);
      fetchJobs();
    } catch (error) {
      toast.error(selectedJob ? 'Failed to update job' : 'Failed to create job');
      console.error('Error saving job:', error);
    }
  };

  const handleCancel = () => {
    setActiveView('jobs');
    setSelectedJob(null);
  };

  const getStats = () => {
    const totalJobs = jobs.length;
    const companies = new Set(jobs.map(job => job.company)).size;
    const locations = new Set(jobs.map(job => job.location)).size;
    const types = jobs.reduce((acc, job) => {
      const type = job.type || 'Not specified';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { totalJobs, companies, locations, types };
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
            borderRadius: '12px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <Sidebar 
        onAddNew={handleAddNew}
        onJobs={() => setActiveView('jobs')}
        onDashboard={() => setActiveView('dashboard')}
        activeView={activeView}
      />
      
      <div className="main-content">
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        {activeView === 'dashboard' ? (
          <Dashboard stats={getStats()} jobs={jobs} />
        ) : activeView === 'add' ? (
          <div className="form-wrapper">
            <JobForm
              job={selectedJob}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        ) : (
          <>
            <SearchFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filterType={filterType}
              onFilterChange={setFilterType}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              totalJobs={filteredJobs.length}
            />
            
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading jobs...</p>
              </div>
            ) : (
              <JobList
                jobs={filteredJobs}
                onEdit={handleEdit}
                onDelete={handleDelete}
                viewMode={viewMode}
              />
            )}
          </>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;