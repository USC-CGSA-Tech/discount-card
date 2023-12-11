import React from 'react';
import Link from 'next/link';
import SearchButton from '@/assets/BottomBar - Icons.png';
import CGSA from '@/assets/cgsa.png';
import Arrow from '@/assets/arrow.png';
import MainPage from '@/assets/main-page.png';

// eslint-disable-next-line no-shadow
export enum HeaderType {
  LANDING = 'landing',
  CARDS = 'cards',
  DETAIL = 'detail',
}

interface HeaderProps {
  type: HeaderType;
  category?: string;
}

export default function Header(props: HeaderProps): JSX.Element {
  const { type, category } = props;

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

  const renderDetail = (): JSX.Element => {
    let link = '/';
    switch (category) {
      case '美食':
        link = '/foods';
        break;
      case '娱乐':
        link = '/entertainment';
        break;
      case '生活':
        link = '/life';
        break;
      default:
        link = '/';
    }

    return (
      <div className="h-16">
        <div className="py-6 px-4 flex justify-between">
          <Link href={link}>
            <img src={Arrow.src} alt="back" className="w-8 h-8" />
          </Link>
          <img src={CGSA.src} alt="cgsa" className="w-8 h-8" />
          <img src={SearchButton.src} alt="search" className="w-8 h-8" />
        </div>
      </div>
    );
  };

  const renderContent = (): JSX.Element => {
    switch (type) {
      case HeaderType.LANDING:
        return renderLanding();
      case HeaderType.CARDS:
        return renderCards();
      case HeaderType.DETAIL:
        return renderDetail();
      default:
        return <div />;
    }
  };

  return renderContent();
}
