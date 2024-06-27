import React, { useEffect, useRef } from 'react';
// import DesktopDesign from './source/design/desktop-design.jpg';
// import MobileDesign from './source/design/mobile-design.jpg';
import Home from './source/design/Home.jpg';

export default function Hello({ children }) {
  // eslint-disable-line
  const devRef = useRef(null);
  const appRef = useRef(null);
  const devStyle = {
    position: 'absolute',
    zIndex: '-1',
    display: 'grid',
    placeContent: 'center',
    opacity: '0',
  };
  const imgStyle = {
    width: '100dvw',
  };

  useEffect(() => {
    const keydownHandle = (ev) => {
      if (ev.key === 'l') devRef.current.style.opacity = '0';
      if (ev.key === 'r') devRef.current.style.opacity = '33%';
      if (ev.key === 'c') devRef.current.style.opacity = '66%';
      if (ev.key === 'g') devRef.current.style.opacity = '100%';
      if (ev.key === 's') appRef.current.style.opacity = '0';
      if (ev.key === 'n') appRef.current.style.opacity = '33%';
      if (ev.key === 't') appRef.current.style.opacity = '66%';
      if (ev.key === 'h') appRef.current.style.opacity = '100%';
    };
    window.addEventListener('keydown', keydownHandle);
    return () => {
      window.removeEventListener('keydown', keydownHandle);
    };
  }, []);

  return (
    <>
      <div ref={devRef} style={devStyle}>
        <picture>
          {/* <source srcSet={DesktopDesign} media="(min-width: 768px)" /> */}
          <img src={Home} alt="Developer Design" style={imgStyle} />
        </picture>
      </div>
      <div ref={appRef}>{children}</div>
    </>
  );
}
