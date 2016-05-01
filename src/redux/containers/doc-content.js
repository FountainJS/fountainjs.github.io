import _ from 'lodash';
import {connect} from 'react-redux';
import DocContent from '../../components/doc/doc-content';
import {fetchDocContent} from '../actions/doc';

const mapStateToProps = (state, props) => {
  const path = props.params.doc || '';
  const doc = _.find(state.doc.docs, {path}) || {};
  const docContent = _.find(state.doc.docsContent, {file: doc.file});
  const content = docContent ? docContent.content : '';
  return {doc, content};
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: doc => dispatch(fetchDocContent(doc))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DocContent);
