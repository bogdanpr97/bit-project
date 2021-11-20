import * as React from 'react';
import { styled, Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-modal.svg';
import './styles.scss';

const style = {
  position: 'absolute',
  top: '56px',
  left: '104px',
  width: 'calc(100vw - 104px)',
  height: 'calc(100vh - 56px)',
  bgcolor: 'white',
  boxShadow: 24,
  py: 4,
};

export default function GeneralModal({open, setOpen}) {
  // const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  console.log(open, setOpen)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-container">
            <div className="modal-header">
              <div>Create report</div>
              <CloseIcon />
            </div>
            <div className="border" />
            <div className="modal-content">rest of content</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}