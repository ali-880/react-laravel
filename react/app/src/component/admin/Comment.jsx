import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAllComment, handleDeleteComment } from '../../actions/site/comment';
import { handlePublishComment } from './../../actions/site/comment/index';
import { ToastContainer } from 'react-toastify';
const Comment = () => {
    const [message, setmessage] = useState({ message: 1 })
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments)
    useEffect(() => {
        dispatch(handleAllComment());
    },[message.message])
    let a = 1;
    return (
        <div className="container">
            <table className="table table-hover table-bordered mt-4">
                <thead>
                    <th>ردیف</th>
                    <th>متن کامنت</th>
                    <th>وضعیت انتشار</th>
                    <th>تایید</th>
                    <th>حذف</th>
                </thead>
                <tbody>

                    {comments.map(com => (
                        <tr key={com.id}>
                            <td>{a++}</td>
                            <td>{com.content}</td>
                            <td>{com.approval == 1 ? "تایید نشده" : "تایید شده"}</td>
                            <td><button className="btn btn-success" style={{ fontSize: "14px" }} onClick={() => {
                                dispatch(handlePublishComment(com.id))
                                setmessage({ message: message.message + 1 })
                            }} >تایید</button></td>
                            <td><button className="btn btn-success" style={{ fontSize: "14px" }} onClick={() => {
                                dispatch(handleDeleteComment(com.id));
                            }}>حذف</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ToastContainer />
        </div>
    );
}
export default Comment;