import React, { useState } from 'react'
import axios from 'axios'

import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";

const CommentContent = (props) => {
    const [reple, setReple] = useState(props.reple.reple);
    const [name] = useState(props.reple.name);
    const [password] = useState(props.reple.password);

    const [passwordIncorrect, setPasswordIncorrect] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    }

    // 비밀번호 입력 및 확인
    const inputPassword = () => {
        const inputPass = prompt("비밀번호를 입력해주세요");
        if (inputPass === password) {
            // alert("일치");
            setPasswordIncorrect(false);
            return true;
        } else {
            alert("비밀번호를 다시 한번 확인해주세요!")
            setPasswordIncorrect(true);
            return false;
        }
    }

    // 댓글 수정
    const SubmitHandler = (e) => {
        e.preventDefault();

        // 비밀번호 입력값 반환 및 저장
        const isPasswordCorret = inputPassword();

        if (!isPasswordCorret) {
            return;
        }

        let body = {
            name: name,
            password: password,
            reple: reple,
            repleId: props.reple._id,
        }

        axios
            .post("/api/reple/edit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글을 수정했습니다.");
                    // console.log(res.data);
                    props.updateComment(body);  // 수정된 댓글을 상태로 업데이트
                    setIsEditing(false);
                } else {
                    alert("댓글을 수정하지 못했습니다.");
                }
            })
            .catch((err) => {
                console.log("요청 실패 : ", err);
            })
    }

    // 댓글 삭제
    const DeleteHandler = (e) => {
        e.preventDefault();

        // 비밀번호 입력값 반환 및 저장
        const isPasswordCorret = inputPassword();

        if (!isPasswordCorret) {
            return;
        }

        if (window.confirm("댓글을 삭제하시겠습니까?")) {
            let body = {
                repleId: props.reple._id,
            }
            axios.post("/api/reple/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("댓글이 삭제되었습니다.");
                        props.deleteComment(props.reple._id);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert("댓글을 삭제하지 못했습니다.");
                })
        }
    }


    return (
        <li>
            <div className="comment__top">
                <ul>
                    <li className="name">
                        {props.reple.name}
                        <button
                            onClick={toggleEdit}
                        ><BsPencilSquare style={{ color: "#cbc1ff", fontSize: "0.8rem" }} /></button>
                        <button
                            onClick={(e) => DeleteHandler(e)}
                        ><FaTrash style={{ color: "#cbc1ff", fontSize: "0.7rem" }} /></button>
                    </li>
                </ul>
            </div>
            <div className="comment__bottom">
                {isEditing ? (
                    <input
                        style={{ imeMode: 'active' }}
                        type='text'
                        className='edit__input'
                        value={reple}
                        onChange={e => setReple(e.currentTarget.value)}
                    />
                ) : (
                    props.reple.reple
                )}
                {isEditing && (
                    <span>
                        <button onClick={(e) => { SubmitHandler(e) }}>수정</button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsEditing(false);
                            }}
                        >취소</button>
                    </span>
                )}
            </div>
        </li>
    )
}

export default CommentContent