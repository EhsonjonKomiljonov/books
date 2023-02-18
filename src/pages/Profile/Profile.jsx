import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProfileHeader } from '../../components/ProfileHeader/ProfileHeader';

export const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <Outlet />
    </>
  );
};
