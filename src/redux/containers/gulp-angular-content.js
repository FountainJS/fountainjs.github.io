import _ from 'lodash';
import {connect} from 'react-redux';
import GulpAngularContent from '../../components/gulp-angular/gulp-angular-content';
import {fetchGulpAngularContent} from '../actions/gulp-angular';

const mapStateToProps = (state, props) => {
  const path = props.params.doc || '';
  const doc = _.find(state.gulpAngular.docs, {path}) || {};
  const docContent = _.find(state.gulpAngular.docsContent, {file: doc.file});
  const content = docContent ? docContent.content : '';
  return {doc, content};
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: doc => dispatch(fetchGulpAngularContent(doc))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GulpAngularContent);
