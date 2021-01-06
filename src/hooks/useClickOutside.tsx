import React, { useRef, useEffect, ReactNode } from 'react';

const useClickOutside: (
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void,
  exceptRef?: React.RefObject<HTMLElement>
) => void = (ref, onClickOutside, exceptRef) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !exceptRef?.current?.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useClickOutside;
