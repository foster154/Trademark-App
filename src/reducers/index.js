import { combineReducers } from 'redux'
import AnnouncementReducer from './AnnouncementReducer'

export default combineReducers({
  announcements: AnnouncementReducer
})
