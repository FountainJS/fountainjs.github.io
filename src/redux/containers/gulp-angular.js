import _ from 'lodash';
import {connect} from 'react-redux';
import GulpAngular from '../../components/gulp-angular/gulp-angular';
import {fetchGulpAngular} from '../actions/gulp-angular';

const mapStateToProps = (state, props) => {
  const path = props.params.doc || '';
  const doc = _.find(state.gulpAngular.docs, {path}) || {};
  return {
    docs: state.gulpAngular.docs,
    selected: doc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchGulpAngular())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GulpAngular);
