import * as React from 'react';
import { Toolbar } from '../components';
import { defaultTheme } from '../../../core/defaultTheme';

class Dashboard extends React.PureComponent {
  public render() {
    return (
      <div>
        <Toolbar theme={defaultTheme}>
          Dashboard
        </Toolbar>
      </div>
    );
  }
}

export default Dashboard;
