import {connect} from 'react-redux';
import Home from '../../components/download/download';
import {fetchOptions, selectOption} from '../actions/options';
import {fetchReleases} from '../actions/releases';

const mapStateToProps = state => {
  return {
    options: state.options.options,
    selection: state.options.selection,
    releases: state.releases.releases
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => {
      dispatch(fetchOptions());
      dispatch(fetchReleases());
    },
    select: (...args) => dispatch(selectOption(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
