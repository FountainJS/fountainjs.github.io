import {connect} from 'react-redux';
import Home from '../../components/home/home';
import {fetchOptions, selectOption} from '../actions/home';

const mapStateToProps = state => {
  return {
    options: state.home.options,
    selection: state.home.selection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchOptions()),
    select: (...args) => dispatch(selectOption(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
