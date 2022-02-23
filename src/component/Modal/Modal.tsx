import { Box, Grid, Modal } from '@mui/material';
import React from 'react';

interface ICommonModalProps {
  open: boolean;
  handleClose: () => void;
}
const CommonModal = ({ open, handleClose }: ICommonModalProps) => {
  return (
    <Modal open={true} onClose={handleClose} sx={{ top: '20%', left: '20%' }}>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ width: '80%', height: '80%', backgroundColor: 'white' }}
      >
        <Grid item>
          <Box>hi</Box>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CommonModal;
