

'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, isMounted]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isMounted) return null;

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      // role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button
          onClick={onClose}
          className={css.closeButton}
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
