import React from 'react';
import SearchButton from '@/assets/BottomBar - Icons.png';
import CGSA from '@/assets/cgsa.png'

export default function Header(): JSX.Element {
  return (
    <div className="h-16 ">
      <div className="py-6 px-4 flex justify-between">
      <img src={CGSA.src} alt="cgsa" className="w-8 h-8" />
      <img src={SearchButton.src} alt="search" className="w-8 h-8" /></div>
    </div>
  );
}
