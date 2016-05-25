import _ from 'lodash';
import {connect} from 'react-redux';
import Step from '../../components/codelab/step';
import {fetchStepContent} from '../actions/codelab';

const mapStateToProps = (state, props) => {
  const path = props.params.step || '';
  const step = _.find(state.codelab.steps, {path}) || {};
  const stepContent = _.find(state.codelab.stepsContent, {file: step.file});
  const content = stepContent ? stepContent.content : '';
  return {step, content};
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: step => dispatch(fetchStepContent(step))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step);
