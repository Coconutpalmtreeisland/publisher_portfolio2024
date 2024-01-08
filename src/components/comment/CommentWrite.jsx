import React, { useState } from 'react'
import axios from 'axios';

const CommentWrite = ({ showSubmit }) => {
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!comment || !name || !password) {
            return alert("이름, 비밀번호, 댓글을 모두 채워야 댓글을 작성할 수 있습니다.");
        }

        let body = {
            reple: comment,
            name: name,
            password: password,
        }

        axios
            .post("/api/reple/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글을 작성해주셔서 감사합니다!🥰");
                    showSubmit(res.data.newComment);
                    setComment('');
                    setName('');
                    setPassword('');
                } else {
                    alert("댓글을 작성하지 못했습니다.");
                }
            })
    }

    return (
        <div className="input__info">
            <label htmlFor='name'>
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => { setName(e.currentTarget.value) }}
                />
            </label>
            <label htmlFor="password">
                <input
                    type="text"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => { setPassword(e.currentTarget.value) }}
                />
            </label>
            <label htmlFor="comment" className='comment'>
                <textarea
                    name="comment"
                    id="comment"
                    rows={1}
                    placeholder="댓글을 작성해주세요."
                    value={comment}
                    onChange={(e) => { setComment(e.currentTarget.value) }}
                ></textarea>
            </label>
            <button
                onClick={(e) => { SubmitHandler(e) }}
            >작성</button>
        </div>
    )
}

export default CommentWrite