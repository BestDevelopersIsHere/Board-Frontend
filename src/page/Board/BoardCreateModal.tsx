import React from 'react';
import { Box, Modal } from '@mui/material';

interface IBoardCreateModal {
  open: boolean;
  onClose: () => {};
}

const BoardCreateModal = ({ open, onClose }: IBoardCreateModal) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box>TEXT</Box>
    </Modal>
  );
};

export default BoardCreateModal;
