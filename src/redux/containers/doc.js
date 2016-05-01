import _ from 'lodash';
import {connect} from 'react-redux';
import Doc from '../../components/doc/doc';
import {fetchDocs} from '../actions/doc';

const mapStateToProps = (state, props) => {
  const path = props.params.doc || '';
  const doc = _.find(state.doc.docs, {path}) || {};
  return {
    docs: state.doc.docs,
    selected: doc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchDocs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doc);
