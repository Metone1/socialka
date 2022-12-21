import { connect } from 'react-redux';
import Navigation from './Navigation';

let mapStateToProps = (state) => {
   return {
      navbar: state.sidebar
   }
}

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;