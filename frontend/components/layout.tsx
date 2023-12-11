import React from 'react';
import Footer from './footer';
import Header, { HeaderType } from './header';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  type: HeaderType;
}

export default function Layout(props: LayoutProps): JSX.Element {
  const { children, type } = props;
  return (
    <>
      <Header type={type} />
      {children}
      <Footer />
    </>
  );
}
