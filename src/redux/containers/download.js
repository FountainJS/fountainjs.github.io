import {connect} from 'react-redux';
import Home from '../../components/download/download';
import {fetchOptions, selectOption} from '../actions/options';

const mapStateToProps = state => {
  return {
    options: state.options.options,
    selection: state.options.selection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchOptions()),
    select: (...args) => dispatch(selectOption(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
