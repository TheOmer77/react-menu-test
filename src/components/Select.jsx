import React from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { ReactComponent as ChevronDownIcon } from '../assets/icons/chevron_down.svg';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

/**
 * @param {{
 * options: { value: any; label: string; }[];
 * value: any;
 * onChange: import('react').EventHandler<import('@szhsin/react-menu').ClickEvent>
 * }} props
 */
const Select = ({ options, value, onChange }) => {
  return (
    <Menu
      className='menu'
      onItemClick={onChange}
      menuButton={
        <MenuButton className='menu-btn select'>
          {options.find((options) => options.value === value).label}
          <ChevronDownIcon className='chevron' />
        </MenuButton>
      }
      transition
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Select;
