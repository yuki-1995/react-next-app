import { styled } from '@mui/system';
import Link from 'next/link';
import react from 'react';
import { SideBarData } from '@/data/displayData';

const Box = styled('div')({
  width: 200,
  height: 'calc(100vh - 50px)',
  background: '#2d445d',
});

const StyledUl = styled('ul')({
  height: 'auto',
  padding: 0,
  width: '100%',
});

const StyledLi = styled('li')({
  width: '100%',
  height: '60px',
  display: 'flex',
  color: 'white',
  justifyContent: 'center',
  alignItems: 'center',
});

const SideBar = () => {
  return (
    <Box>
      <StyledUl>
        {SideBarData.map((value, key) => {
          return (
            <StyledLi key={key}>
              <Link href={value.link} style={{ color: 'white' }}>
                {value.title}
              </Link>
            </StyledLi>
          );
        })}
      </StyledUl>
    </Box>
  );
};

export default SideBar;
