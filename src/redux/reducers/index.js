import {combineReducers} from 'redux';
import home from './home';
import doc from './doc';
import blog from './blog';

export default combineReducers({home, doc, blog});
