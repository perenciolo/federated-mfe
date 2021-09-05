import { mount } from "auth/auth-mfe";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default function App({ onSignIn }) {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (ref.current) {
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
    }
  }, [ref, history]);

  return <div ref={ref} />;
}
