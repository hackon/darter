import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import X01 from './containers/X01';
import CricketGame from './containers/CricketGame';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const app =
  <MuiThemeProvider>
    <App>
      {/*<X01 />*/}
      <CricketGame/>
    </App>
  </MuiThemeProvider>;


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
