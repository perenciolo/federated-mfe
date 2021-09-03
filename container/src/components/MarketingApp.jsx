import { mount } from "marketing/marketing-mfe";
import React, { useEffect, useRef } from "react";

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, [ref]);

  return <div ref={ref} />;
}
