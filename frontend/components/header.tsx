import React from 'react';
import Link from 'next/link';
import SearchButton from '@/assets/BottomBar - Icons.png';
import CGSA from '@/assets/cgsa.png';
import MainPage from '@/assets/main-page.png';

// eslint-disable-next-line no-shadow
export enum HeaderType {
  LANDING = 'landing',
  CARDS = 'cards',
  DETAIL = 'detail',
}

interface HeaderProps {
  type: HeaderType;
}

export default function Header(props: HeaderProps): JSX.Element {
  const { type } = props;

  const renderLanding = (): JSX.Element => (
    <div className="h-16">
      <div className="py-6 px-4 flex justify-between">
        <img src={CGSA.src} alt="cgsa" className="w-8 h-8" />
        <img src={SearchButton.src} alt="search" className="w-8 h-8" />
      </div>
    </div>
  );

  const renderCards = (): JSX.Element => (
    <div className="h-16">
      <div className="py-6 px-4 flex justify-between">
        <Link href="/">
          <img src={MainPage.src} alt="main" className="w-8 h-8" />
        </Link>
        <img src={CGSA.src} alt="cgsa" className="w-8 h-8" />
        <img src={SearchButton.src} alt="search" className="w-8 h-8" />
      </div>
    </div>
  );

  const renderContent = (): JSX.Element => {
    switch (type) {
      case HeaderType.LANDING:
        return renderLanding();
      case HeaderType.CARDS:
        return renderCards();
      default:
        return <div />;
    }
  };

  return renderContent();
}
