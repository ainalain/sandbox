import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';

import AppBar from '../Library/AppBar/AppBar';

export class Layout extends React.Component {
 render() {
   return (
     <div>
       <CssBaseline/>
       <AppBar />
       {this.props.children}
     </div>
   );
 }
}

export default Layout;
