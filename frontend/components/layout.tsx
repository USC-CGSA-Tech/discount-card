import React from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: JSX.Element;
}
export default function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
