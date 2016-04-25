import {connect} from 'react-redux';
import ReactTechs from '../../components/techs/techs';

const mapStateToProps = state => {
  return {techs: state.techs};
};

export default connect(mapStateToProps)(ReactTechs);
