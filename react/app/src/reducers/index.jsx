import { combineReducers } from 'redux';
import { Person } from './PersonManager/Person';
import { Persons } from './PersonManager/Persons';
import { Show } from './PersonManager/Show';
import { Courses } from './site/courses';
import { Course } from './site/course';
import { Isopen } from './site/Isopen';
import { IsopenChange } from './site/isopenchange';
import { Video } from './admin/video';
import { message } from './user/massage';
import { messageConfirmed } from './user/messageConfirm';
import { User } from './user/user';
import { Comment } from './comment/Comment';
import { Comments } from './comment/Comments';
export const CombineReducer=combineReducers({
    persons:Persons,
    person:Person,
    show:Show,
    courses:Courses,
    isopen:Isopen,
    course:Course,
    isopenchange:IsopenChange,
    video:Video,
    messageCaptcha:message,
    user:User,
    messageconfirmed:messageConfirmed,
    comment:Comment,
    comments:Comments,
});