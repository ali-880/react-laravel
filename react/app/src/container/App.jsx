import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import Switch from 'react-bootstrap/esm/Switch';
import Layout2 from '../layout/Site.jsx/siteManager';
import LastCourse from '../component/site/common/LastCourse';
import Course from './../component/site/component/Course';
import AdminLayoute from './../layout/admin/AdminLayout';
import Archive from './../component/site/component/Archive';
import Login from './../component/site/component/Login';
import Register from './../component/site/component/Register';
import Single from './../component/site/component/Single';
import VideoUpload from './../component/site/component/VideoUpload';
import { Auth } from './../util/auth/Auth';
import lodash from 'lodash';
import { useSelector } from 'react-redux';
import Logout from './../component/site/component/Logout';
import Comment from '../component/admin/Comment';
import CommentPublish from './../component/admin/CommentPublish';
const App = () => {
    useEffect(()=>{
        Auth();
    },[])
    const user=useSelector(state=>state.user);
    return (
        <Switch>
            <Route path={['/admin',"/admin/course","/admin/uploadvideo/:id","/admin/comment/unpublish","/admin/comment/publish"]} exact>
                <AdminLayoute>
                    <Switch>
                        <Route  path="/admin" exact/>
                        <Route  path="/admin/course" exact component={Course} />
                        <Route  path="/admin/comment/unpublish" exact component={Comment} />
                        <Route  path="/admin/comment/publish" exact component={CommentPublish} />
                        <Route  path="/admin/uploadvideo/:id" exact component={VideoUpload} />
                    </Switch>
                </AdminLayoute>
            </Route>
            <Route path={["/","/archive","/login","/register","/single/:id","/logout"]} exact>
                <Switch>
                    <Layout2>
                        <Route path="/" exact component={LastCourse} />
                        <Route path="/archive" exact component={Archive} />
                        <Route path="/login" exact render={()=>!lodash(user).isEmpty()?<Redirect to="/"/>:<Login/>} />
                        <Route path="/logout" exact render={()=>lodash(user).isEmpty()?<Redirect to="/"/>:<Logout/>} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/single/:id" exact component={Single} />
                    </Layout2>
                </Switch>
            </Route>
        </Switch>
    );
}
export default App;