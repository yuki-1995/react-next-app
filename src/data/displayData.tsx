import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/icons-material/List';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React from 'react';

export const SideBarData = [
  {
    title: 'ホーム',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: '従業員新規追加',
    icon: <PersonAddIcon />,
    link: '/Employee',
  },
  {
    title: '従業員一覧',
    icon: <List />,
    link: '/Employees',
  },
];
