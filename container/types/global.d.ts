declare module 'default' {
  import { History, LocationListener, Location } from 'history';

  type Mount<T = {}> = (
    el: Element,
    args: {
      initialPath?: string;
      defaultHistory?: History<T>;
      onNavigate?: LocationListener<T>;
      onSignIn?: () => void;
    }
  ) => { onParentNavigate: LocationListener };

  export const mount: Mount;
}

declare module 'auth/auth-mfe' {
  export { mount } from 'default';
}

declare module 'marketing/marketing-mfe' {
  export { mount } from 'default';
}
