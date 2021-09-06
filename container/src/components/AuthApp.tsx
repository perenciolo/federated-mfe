import { mount } from 'auth/auth-mfe';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

interface AppProps {
  onSignIn: () => void;
}

export default function App({ onSignIn }: AppProps): JSX.Element {
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
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, [ref, history, onSignIn]);

  return <div ref={ref} />;
}
