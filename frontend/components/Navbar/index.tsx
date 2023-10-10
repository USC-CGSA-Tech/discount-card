import React from 'react';
import { Menu } from 'antd';
import { Input } from 'antd';

type NavBarProps = {
  current: string;
  onClick: (e: any) => void;
  search: string;
  onChange: (e: any) => void;
};

function NavBar({ current, onClick, search, onChange }: NavBarProps) {
  return (
    <Menu mode="horizontal" theme="dark" onClick={onClick} selectedKeys={[current]}>
      <Menu.Item key="food">Food</Menu.Item>
      <Menu.Item key="drinks">Drinks</Menu.Item>
      <Menu.Item key="entertainment">Entertainment</Menu.Item>
      <Menu.Item key="search">
        <Input
          placeholder="Search here..."
          style={{ width: 200, verticalAlign: 'middle' }}
          value={search}
          onChange={onChange}
        />
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
