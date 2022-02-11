import React, { useEffect, useRef } from 'react';

export interface ScrollToBottomProps {
  children: React.ReactNode;
}

export default function ScrollToBottom(props: ScrollToBottomProps) {
  const { children } = props;
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [children]);

  return (
    <>
      {children}
      <div ref={endRef} />
    </>
  );
}
