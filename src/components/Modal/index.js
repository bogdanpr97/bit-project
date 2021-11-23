import * as React from 'react';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-modal.svg';
import './styles.scss';
import CustomSelect from '../Select';
import Input from '../Input';
import CustomCheckbox from '../CheckBox';
import { NotificationContext } from '../../providers/NotificationProvider';

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
  const { addNotification } = React.useContext(NotificationContext);
  const [type, setType] = React.useState("");
  const [name, setName] = React.useState("");
  const [readOnlyValue, setReadOnlyValue] = React.useState("read only");
  const [disabledValue, setDisabledValue] = React.useState("disabled");
  const [pdfChecked, setPdfChecked] = React.useState(false);
  const [othersChecked, setOthersChecked] = React.useState(false);
  const [othersTrueChecked, setOthersTrueChecked] = React.useState(true);

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
                <div className="label">Type</div>
                <CustomSelect value={type} onChange={handleChange} options={typeOptions} />
              </div>
              <div className="input-section">
                <div className="label">Name*</div>
                <Input value={name} setValue={setName} />
              </div>
              <div className="input-section">
                <div className="label">Read Only</div>
                <Input readOnly value={readOnlyValue} setValue={setReadOnlyValue} />
              </div>
              <div className="input-section">
                <div className="label">Disabled</div>
                <Input disabled value={disabledValue} setValue={setDisabledValue} />
              </div>
              <div className="input-section">
                <div className="label">Attach Files</div>
                <div stlye={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="checkbox-section">
                    <CustomCheckbox checked={pdfChecked} setChecked={setPdfChecked} />
                    <div className="checkbox-text">Pdf Attachments</div>
                  </div>
                  <div className="checkbox-section">
                    <CustomCheckbox disabled checked={othersChecked} setChecked={setOthersChecked} />
                    <div className="checkbox-text">Disabled</div>
                  </div>
                  <div className="checkbox-section">
                    <CustomCheckbox disabled checked={othersTrueChecked} setChecked={setOthersTrueChecked} />
                    <div className="checkbox-text">Disabled On</div>
                  </div>
                </div>
              </div>
              <div className="section-heading">EXTRA FOR SCROLL</div>
              <div className="input-section">
                <div className="label">Type</div>
                <CustomSelect value={type} onChange={handleChange} options={typeOptions} />
              </div>
              <div className="input-section">
                <div className="label">Name*</div>
                <Input value={name} setValue={setName} />
              </div>
              <div className="input-section">
                <div className="label">Read Only</div>
                <Input readOnly value={readOnlyValue} setValue={setReadOnlyValue} />
              </div>
              <div className="input-section">
                <div className="label">Disabled</div>
                <Input disabled value={disabledValue} setValue={setDisabledValue} />
              </div>
              <div className="input-section">
                <div className="label">Attach Files</div>
                <div stlye={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="checkbox-section">
                    <CustomCheckbox checked={pdfChecked} setChecked={setPdfChecked} />
                    <div className="checkbox-text">Pdf Attachments</div>
                  </div>
                  <div className="checkbox-section">
                    <CustomCheckbox disabled checked={othersChecked} setChecked={setOthersChecked} />
                    <div className="checkbox-text">Disabled</div>
                  </div>
                  <div className="checkbox-section">
                    <CustomCheckbox disabled checked={othersTrueChecked} setChecked={setOthersTrueChecked} />
                    <div className="checkbox-text">Disabled On</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="border"></div>
            <div className="buttons-container">
              <div onClick={() => setOpen(false)} className="cancel-button">
                Cancel
              </div>
              <div onClick={() => addNotification('Successfully saved the report')} className="save-button">
                Save
              </div>
            </div>    
          </div>
        </Box>
      </Modal>
    </div>
  );
}