import React from 'react';
import Layout1 from './../layout/personMan/PersonManager';
import { Route } from 'react-router';
import Switch from 'react-bootstrap/esm/Switch';
import Crsh from '../component/PersonManager/Crsh';
import Layout2 from '../layout/Site.jsx/siteManager';
import LastCourse from '../component/site/common/LastCourse';
import Course from './../component/site/component/Course';
import AdminLayoute from './../layout/admin/AdminLayout';
import Archive from './../component/site/component/Archive';
import Login from './../component/site/component/Login';
import Register from './../component/site/component/Register';
import Single from './../component/site/component/Single';
import VideoUpload from './../component/site/component/VideoUpload';
const App = () => {
    return (
        <Switch>
            <Route path={['/admin',"/admin/course","/admin/uploadvideo/:id"]} exact>
                <AdminLayoute>
                    <Switch>
                        <Route  path="/admin" exact/>
                        <Route  path="/admin/course" exact component={Course} />
                        <Route  path="/admin/uploadvideo/:id" exact component={VideoUpload} />
                    </Switch>
                </AdminLayoute>
            </Route>
            <Route path={["/","/archive","/login","/register","/single/:id"]} exact>
                <Switch>
                    <Layout2>
                        <Route path="/" exact component={LastCourse} />
                        <Route path="/archive" exact component={Archive} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/single/:id" exact component={Single} />
                    </Layout2>
                </Switch>
            </Route>
        </Switch>
    );
}
export default App;