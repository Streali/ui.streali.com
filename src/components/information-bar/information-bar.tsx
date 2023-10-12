'use client';

import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import { Text } from '../text/text';

interface InformationBarProps {
  id: string;
  text: string;
  type?: 'info' | 'warning' | 'error';
  displayOneTime?: boolean;
}

const typeColor = {
  info: 'bg-grey-900 text-white',
  warning: 'bg-warning-100 text-warning-600',
  error: 'bg-error-100 text-error-500',
};

export function InformationBar(props: InformationBarProps) {
  const { text, type = 'info', id, displayOneTime = false } = props;
  const [display, setDisplay] = useState(true);

  const handleClose = () => {
    setDisplay(false);
    if (displayOneTime) {
      localStorage.setItem(id, 'true');
    }
  };

  useEffect(() => {
    if (displayOneTime) {
      const isDisplayed = sessionStorage.getItem(id);
      if (isDisplayed) {
        setDisplay(false);
      }
    }
  }, []);

  return (
    <>
      {display && (
        <div className={`w-full h-12 fixed top-0 left-0 flex px-3 z-[999] ${typeColor[type]}`}>
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-center items-center">
            <Text type="h4">{text}</Text>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Button iconLeft="close-line" color="transparent" onClick={handleClose} />
          </div>
        </div>
      )}
    </>
  );
}
