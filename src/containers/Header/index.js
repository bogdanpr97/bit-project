import React from 'react';
import './styles.scss';
import { ReactComponent as PresentIcon } from '../../assets/icons/present.svg';
import { ReactComponent as QuestionIcon } from '../../assets/icons/question.svg';
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    left: -4,
    background: 'orange',
  },
}));

const Header = () => {
  return (
    <div className="header-container">
      <div className="profile-text">Welcome John Smith</div>
      <PresentIcon onClick={() => console.log('present')} className="icon" />
      <QuestionIcon onClick={() => console.log('question')} className="icon" />
      <StyledBadge badgeContent={24} color="primary">
        <BellIcon onClick={() => console.log('bell')} className="icon" />
      </StyledBadge>
    </div>
  )
}

export default Header
