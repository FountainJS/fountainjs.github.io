import _ from 'lodash';
import {connect} from 'react-redux';
import Codelab from '../../components/codelab/codelab';
import {fetchSteps} from '../actions/codelab';

const mapStateToProps = (state, props) => {
  const path = props.params.step || '';
  const step = _.find(state.codelab.steps, {path}) || {};
  return {
    steps: state.codelab.steps,
    selected: step
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchSteps())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Codelab);
