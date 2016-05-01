import {connect} from 'react-redux';
import Doc from '../../components/doc/doc';
import {fetchDocs} from '../actions/doc';

const mapStateToProps = state => {
  return {
    docs: state.doc.docs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchDocs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doc);
