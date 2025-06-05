import { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDialog = () => setIsModalOpen(true);
  const closeDialog = () => setIsModalOpen(false);

  const handleDelete = () => {
    alert('Ooopsss You Are Deleted!');
    closeDialog();
  };

  return (
    <div>
      <button onClick={openDialog}>Delete Me!</button>

      <Modal isOpen={isModalOpen} onClose={closeDialog}>
        <p>Are you sure you want to delete ME?</p>
        <button onClick={closeDialog}>Oh, NO! That was a mistake...</button>
        <button onClick={handleDelete}>YES, Delete ME Now!</button>
      </Modal>
    </div>
  );
}

export default App;
