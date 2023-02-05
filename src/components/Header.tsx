import { styled } from '@mui/system';
import react from 'react';

const StyledHeader = styled('div')({
  width: '100vw',
  height: 50,
  color: 'white',
  backgroundColor: '#0091ea',
  boxSizing: 'border-box',
});

const Header = () => {
  return <StyledHeader>勤怠管理システム</StyledHeader>;
};

export default Header;
