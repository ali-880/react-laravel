import React, { Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCourse, IsopenModal, handeleCreateCourse, handleDeleteCourse, handleUpdateCourse, IsopenModalForChange } from './../../../actions/site/index';
import Modal from 'react-modal';
import SimpleReactValidator from 'simple-react-validator';
import {  ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
const Course = () => {
    const validator=useRef(new SimpleReactValidator(
        {
            messages:{
                required:"این فیلد الزامی است",
                string:"این فیلد عدد قبول نمی کند",
                min:"حداقل ورود پنج کاراکتر الزامیست",
            },
            element:ma=>(<div style={{color:"red"}}>{ma}</div>)
        }
    ))
    const [refresh, setrefresh] =useState({ refresh: false })
    
    const[valid,setvalid]=useState({valid:false});
    const isopenchange=useSelector(state=>state.isopenchange);
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses)
    const isopen = useSelector(state => state.isopen);
    let a = 1;
    const customStyles = {
        content: {
            top: '35%',
            left: '50%',
            right: '50%',
            bottom: '0%',
            marginRight: '-50%',
            transform: 'translate(-50%, -25%)',
            background: "#f5f6fa",
            fontSize:"14px"
        }
    };
    const [gettitle, settitle] = useState({ title: "" })
    const [getprice, setprice] = useState({ price: "" })
    const [getteacher, setteacher] = useState({ teacher: "" })
    const [getimage, setimage] = useState({ image: "" })
    const [getdescription, setdescription] = useState({ description: "" })
    const [getname, setname] = useState({ name: "" })

    return (
        <div className="container" style={{fontSize:"14px"}}>
            <Modal 
                isOpen={isopen}
                onRequestClose={() => dispatch(IsopenModal())}
                style={customStyles}
                contentLabel="ایجاد"
            >
                <form onSubmit={(event) => { (dispatch(handeleCreateCourse(validator,event, getteacher.teacher, gettitle.title, getdescription.description, getprice.price, getimage.image,getname.name))) }}>
                    <div className="form-group">
                        <label for="title">عنوان</label>
                        <input type="text" name="title" className="form-control" id="title" placeholder="عنوان" onChange={
                            (event) => {
                                settitle({ title: (event.target.value) })
                                validator.current.showMessageFor("title");
                                setvalid({valid:!valid});
                            }
                            } />
                        {validator.current.message('title', gettitle.title, 'required')}
                    </div>
                    <div className="form-group">
                        <label for="name">نام</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="نام" onChange={
                            (event) => {
                                setname({ name: (event.target.value) })
                                validator.current.showMessageFor("name");
                                setvalid({valid:!valid});
                            }
                            } />
                        {validator.current.message('name', getname.name, 'required')}
                    </div>
                    <div className="form-group">
                        <label for="teacher">دبیر</label>
                        <input type="text" name="teacher" className="form-control" id="teacher" placeholder="دبیر" onChange={(event) => 
                        {
                            setteacher({ teacher: (event.target.value) })
                            validator.current.showMessageFor('teacher');
                            setvalid({valid:!valid});
                        }
                    }/>
                        {validator.current.message('teacher', getteacher.teacher, 'required|string')}
                    </div>
                    <div className="form-group">
                        <label for="price">قیمت</label>
                        <input type="text" name="price" className="form-control" id="price" placeholder="قیمت" onChange={
                            (event) => {
                                setprice({ price: (event.target.value) });
                                validator.current.showMessageFor('price');
                                setvalid({valid:!valid});
                            }
                        } />
                        {validator.current.message('price', getprice.price, 'required|string')}
                        {}
                    </div>
                    <div className="form-group">
                        <label for="description">توضیحات</label>
                        <textarea row="3" name="description" className="form-control" id="description" placeholder="توضیحات" onChange={(event) => {
                            setdescription({ description: (event.target.value) })
                            validator.current.showMessageFor('description');
                            setvalid({valid:!valid});
                        }
                        } />
                        {validator.current.message('description', getdescription.description, 'required|min:5')}
                    </div>
                    <div className="form-group">
                        <label for="imageUrl">عکس</label>
                        <input type="file" name="imageUrl" className="form-control" id="imageUrl" onChange={(event) => {
                            setimage({ image: event.target.files[0] });
                            validator.current.showMessageFor('imageUrl');
                            setvalid({valid:!valid});
                        }} />
                        {validator.current.message('imageUrl', getimage.image, 'required')}
                    </div>
                    <button type="submit" className="btn btn-success" style={{fontSize:"14px"}}>ارسال</button>
                </form>
            </Modal>
            <button className="btn btn-success my-3" style={{ marginTop: "20px", marginRight: "10px",fontSize:"14px" }} onClick={() => dispatch(IsopenModal())}>ساخت دوره ی جدید</button>
            <table className="table table-bordered table-hover" style={{ marginTop: "20px" }}>
                <thead style={{ fontSize: "16px" }}>
                    <td>ردیف</td>
                    <td>نام</td>
                    <td>عنوان</td>
                    <td>دبیر</td>
                    <td>عکس</td>
                    <td>حذف</td>
                    <td>قیمت</td>
                    <td>ویرایش</td>
                    <td>افزودن ویدیو</td>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{a++}</td>
                            <td>{course.name}</td>
                            <td><Link to={`/single/${course.slug}`}>{course.title}</Link></td>
                            <td>{course.teacher}</td>
                            <td>{course.price}</td>
                            <td><Link to={`/single/${course.slug}`}><img style={{ width: "80px", height: "80px" }} src={`http://127.0.0.1:8000/storage/images/${course.imageUrl}`} /></Link></td>
                            <td><button style={{fontSize:"14px"}} className="btn btn-success" onClick={() => dispatch(handleDeleteCourse(course.id))}>حذف</button></td>
                            <td><button style={{fontSize:"14px"}} className="btn btn-success" onClick={()=>dispatch(IsopenModalForChange())}>ویرایش</button></td>
                            <td><Link to={`/admin/uploadvideo/${course.slug}`} className="btn btn-success" style={{fontSize:"14px"}}>افزودن ویدیو</Link></td>
                            <Modal
                                isOpen={isopenchange}
                                onRequestClose={() => dispatch(IsopenModalForChange())}
                                style={customStyles}
                                contentLabel="ویرایش"
                            >
                                <form onSubmit={(event) => {
                                     (dispatch(handleUpdateCourse(event,course.id, getteacher.teacher, gettitle.title, getdescription.description, getprice.price, getimage.image,getname.name)));
                                     }} onClick={()=>{setrefresh({refresh:!refresh.refresh}) ;console.log(refresh.refresh)}}>
                                    <div className="form-group">
                                        <label for="title">عنوان</label>
                                        <input  type="text" className="form-control" id="title" placeholder="عنوان" onChange={(event) => settitle({ title: (event.target.value) })} />
                                    </div>
                                    <div className="form-group">
                                        <label for="name">نام</label>
                                        <input  type="text" className="form-control" id="name" placeholder="نام" onChange={(event) => setname({ name: (event.target.value) })} />
                                    </div>
                                    <div className="form-group">
                                        <label for="teacher">دبیر</label>
                                        <input  type="text" className="form-control" id="teacher" placeholder="دبیر" onChange={(event) => setteacher({ teacher: (event.target.value) })} />
                                    </div>
                                    <div className="form-group">
                                        <label for="price">قیمت</label>
                                        <input  type="text" className="form-control" id="price" placeholder="قیمت" onChange={(event) => setprice({ price: (event.target.value) })} />
                                    </div>
                                    <div className="form-group">
                                        <label for="description">توضیحات</label>
                                        <textarea row="3" className="form-control" id="description" placeholder="توضیحات" onChange={(event) => setdescription({ description: (event.target.value)})}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="imageUrl">عکس</label>
                                        <input type="file" className="form-control" id="imageUrl" onChange={(event) => {
                                            setimage({ image: event.target.files[0] });
                                        }} />
                                        <p>{course.imageUrl}</p>
                                    </div>
                                    <button type="submit" className="btn btn-success">ارسال</button>
                                </form>
                            </Modal>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
}

export default Course;