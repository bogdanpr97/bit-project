import React, { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { NotificationContext } from '../../providers/NotificationProvider';
import { ReactComponent as CheckIcon } from '../../assets/icons/check-outline.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './styles.scss';

function ToastNotification() {
  const { notification, removeNotification } = useContext(NotificationContext);

  const handleClose = () => {
    removeNotification();
  };

  return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={!!notification}
        autoHideDuration={3000}
        onClose={handleClose}
      >
          <Alert
            className="alert"
            iconMapping={{
              success: <CheckIcon />,
            }}
            variant="filled"
            severity={notification?.severity}
          >
            <div className="toast-text-container">
              <div className="toast-text">Successfully saved the report</div>
              <CloseIcon className="close" onClick={handleClose} />
            </div>
          </Alert>
      </Snackbar>
  );
}

export default ToastNotification;