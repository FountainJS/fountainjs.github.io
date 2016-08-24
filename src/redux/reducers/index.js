import {combineReducers} from 'redux';
import options from './options';
import doc from './doc';
import gulpAngular from './gulp-angular';
import blog from './blog';
import releases from './releases';

export default combineReducers({options, doc, gulpAngular, blog, releases});
