import React from 'react';

interface DeleteDialogProps {
  isOpen: boolean;
  jobTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ isOpen, jobTitle, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="dialog-overlay" onClick={onCancel} />
      <div className="dialog-container">
        <div className="dialog-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2"/>
          </svg>
        </div>
        
        <h2 className="dialog-title">Delete Job</h2>
        
        <p className="dialog-message">
          Are you sure you want to delete <strong>"{jobTitle}"</strong>? This action cannot be undone.
        </p>
        
        <div className="dialog-actions">
          <button className="dialog-btn dialog-btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="dialog-btn dialog-btn-delete" onClick={onConfirm}>
            Delete Job
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteDialog;