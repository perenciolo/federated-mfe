import { mount } from 'marketing/marketing-mfe';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate({ pathname: nexPathName }) {
        const { pathname } = history.location;
        if (pathname !== nexPathName) {
          history.push(nexPathName);
        }
      },
    });

    history.listen(onParentNavigate);
  }, [ref, history]);

  return <div ref={ref} />;
}
