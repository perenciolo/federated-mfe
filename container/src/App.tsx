import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
import Header from './components/Header';
import Progress from './components/Progress/Progress';

const generateClassName = createGenerateClassName({
  productionPrefix: 'cnt',
});

export default function () {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
}
