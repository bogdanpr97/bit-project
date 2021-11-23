import React, { useContext, useState } from 'react';
import { ReactComponent as LandingImage } from '../../assets/images/landing.svg';
import GeneralModal from '../../components/Modal';
import { NotificationContext } from '../../providers/NotificationProvider';
import './styles.scss';

const Landing = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="landing-container">
      <GeneralModal open={modalOpen} setOpen={setModalOpen} />
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
          <div onClick={() => setModalOpen(true)}  className="info-button">
            Create Report
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
