import React, { useRef, useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (!modal) return;

    if (isOpen) {
      if (!modal.open) modal.showModal();
    } else {
      if (modal.open) modal.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} onClose={onClose}>
      {children}
    </dialog>
  );
};

export default Modal;
