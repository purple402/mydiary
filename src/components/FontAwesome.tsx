import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faPen,
  faMagnifyingGlass,
  faChartColumn,
} from '@fortawesome/free-solid-svg-icons';
// import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

interface IconProps {
  isActive: boolean;
}

function BookIcon({ isActive }: IconProps) {
  return (
    <FontAwesomeIcon
      icon={faBook}
      size="lg"
      color={isActive ? '#5203fc' : 'gray'}
    />
  );
}

function PenIcon({ isActive }: IconProps) {
  return (
    <FontAwesomeIcon
      icon={faPen}
      size="lg"
      color={isActive ? '#5203fc' : 'gray'}
    />
  );
}

function SearchIcon({ isActive }: IconProps) {
  return (
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      size="lg"
      color={isActive ? '#5203fc' : 'gray'}
    />
  );
}

function ChartIcon({ isActive }: IconProps) {
  return (
    <FontAwesomeIcon
      icon={faChartColumn}
      size="lg"
      color={isActive ? '#5203fc' : 'gray'}
    />
  );
}

export { BookIcon, PenIcon, SearchIcon, ChartIcon };
