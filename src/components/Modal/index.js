import * as React from 'react';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-modal.svg';
import './styles.scss';
import CustomSelect from '../Select';
import Input from '../Input';

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

const typeOptions = [
  {
    value: "Executive Summary",
    text: "Executive Summary",
  },
  {
    value: "Executive Summary 2",
    text: "Executive Summary 2",
  },
]

export default function GeneralModal({open, setOpen}) {
  const [type, setType] = React.useState("");
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleClose = () => setOpen(false);

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
              <CloseIcon className="icon" onClick={() => handleClose()} />
            </div>
            <div className="border" />
            <div className="modal-content">
              <div className="section-heading">Details</div>
              <div className="input-section">
                <div>Type</div>
                <CustomSelect value={type} onChange={handleChange} options={typeOptions} />
              </div>
              <div className="input-section">
                <div>Name*</div>
                <Input value={name} setValue={setName} />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}