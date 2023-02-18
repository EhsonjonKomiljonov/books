import React, { useContext } from 'react';
import { ProfileHeaderLinks } from './profile-header.styles';
import { LocalizationContext } from '../../context/LocalizationContext';
import { lang } from '../../lang/lang';

export const ProfileHeader = () => {
  const { lang: language } = useContext(LocalizationContext);
  return (
    <header className="absolute top-0 right-0 left-0">
      <ul className="flex items-center">
        <li className="flex-grow">
          <ProfileHeaderLinks
            className={({ isActive }) =>
              isActive
                ? `active ${lang.ru ? 'font-normal' : 'font-poppins'}`
                : ``
            }
            to="profile-edit"
          >
            <span>1</span>
            {lang[language].ProfilePage.ProfileHeader.profileLink}
          </ProfileHeaderLinks>
        </li>
        <li className="flex-grow">
          <ProfileHeaderLinks
            className={({ isActive }) =>
              isActive
                ? `active ${lang.ru ? 'font-normal' : 'font-poppins'}`
                : ``
            }
            to="profile-security"
          >
            <span>2</span>
            {lang[language].ProfilePage.ProfileHeader.securityLink}
          </ProfileHeaderLinks>
        </li>
        <li className="flex-grow">
          <ProfileHeaderLinks
            className={({ isActive }) =>
              isActive
                ? `active ${lang.ru ? 'font-normal' : 'font-poppins'}`
                : ``
            }
            to="profile-settings"
          >
            <span>3</span>
            {lang[language].ProfilePage.ProfileHeader.settingsLink}
          </ProfileHeaderLinks>
        </li>
      </ul>
    </header>
  );
};
