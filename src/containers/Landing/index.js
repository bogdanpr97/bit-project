import React, { useContext } from 'react';
import { ReactComponent as LandingImage } from '../../assets/images/landing.svg';
import { NotificationContext } from '../../providers/NotificationProvider';
import './styles.scss';

const Landing = () => {
  const { addNotification } = useContext(NotificationContext);

  return (
    <div className="landing-container">
      <div className="page-title">Page Title</div>
      <div className="content">
        <div className="info">
          <LandingImage className="info-image" />
          <div className="info-header">
            Start creating reports
          </div>
          <div className="info-text">
            You don’t have any reports defined yet
          </div>
          <div onClick={() => addNotification('Successfully saved the report')} className="info-button">
            Create Report
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
