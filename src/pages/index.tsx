// import { Inter } from '@next/font/google';
import { styled } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

// const inter = Inter({ subsets: ['latin'] });

const StyledHome = styled('div')({
  width: '100vw',
  height: '100vh',
});

export default function Home() {
  return <div>Home</div>;
}
