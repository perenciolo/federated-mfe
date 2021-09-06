import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';
import { useStyles } from './Progress.styles';

export default function Progress(): JSX.Element {
  const { bar } = useStyles();

  return (
    <div className={bar}>
      <LinearProgress />
    </div>
  );
}
