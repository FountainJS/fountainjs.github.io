import {connect} from 'react-redux';
import Home from '../../components/home/home';
import {selectOption} from '../actions/home';

const mapStateToProps = state => {
  return {
    options: state.home.options,
    selection: state.home.selection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select: (...args) => dispatch(selectOption(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
