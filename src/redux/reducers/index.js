import {combineReducers} from 'redux';
import home from './home';
import doc from './doc';
import gulpAngular from './gulp-angular';
import blog from './blog';
import codelab from './codelab';

export default combineReducers({home, doc, gulpAngular, blog, codelab});
