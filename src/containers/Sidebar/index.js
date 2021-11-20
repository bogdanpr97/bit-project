import React from 'react';
import './styles.scss';
import { ReactComponent as LogoSvg } from '../../assets/icons/logo.svg';
import { ReactComponent as DashboardSvg } from '../../assets/icons/dashboard.svg';
import { ReactComponent as OpenArrow } from '../../assets/icons/open-arrow.svg';
import MenuItem from './MenuItem';

const itemsData = [
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
  {
    IconComponent: DashboardSvg,
    title: 'Dashboard',
  },
]

const SideBar = () => {
  return (
    <div className="container-sidebar">
      <OpenArrow className="toggle-button" />
      <LogoSvg className="logo" />
      {itemsData.map(item => {
        return <MenuItem IconComponent={item?.IconComponent} title={item?.title} />
      })}
    </div>
  )
}

export default SideBar
