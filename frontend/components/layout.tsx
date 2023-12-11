import React from 'react';
import Footer from './footer';
import Header, { HeaderType } from './header';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  type: HeaderType;
  category?: string;
}

export default function Layout(props: LayoutProps): JSX.Element {
  const { children, type, category } = props;
  return (
    <>
      <Header type={type} category={category} />
      {children}
      <Footer />
    </>
  );
}
