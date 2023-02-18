import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileHeaderLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 23px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #70737c;
  background-color: var(--bg-default-link-profile);
  border-radius: 4px 4px 0px 0px;

  & > span {
    margin-right: 8px;
    padding: 5px 13px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-profile-span);
    background-color: var(--bg-default-span-profile);
    border: var(--border-profile-span);
    border-radius: 4px;
  }

  &.active {
    background-color: var(--bg-active-page-profile);
  }

  &.active > span {
    background-color: var(--bg-active-page-span);
    color: #fff;
  }
`;
