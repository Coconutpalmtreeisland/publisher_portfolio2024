import React, { useState } from 'react'
import CommentList from './comment/CommentList'
import CommentWrite from './comment/CommentWrite'

const Section4 = () => {
    const [comments, setComments] = useState([]);

    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    }

    const deleteComment = (commentId) => {
        setComments(comments.filter(comment => comment._id !== commentId));
    }

    return (
        <section id="section4">
            <div className="window__wrap container">
                <div className="window__bar">
                    <div className="title"><span></span>comment</div>
                </div>
                <div className="comment__wrap">
                    <CommentList comments={comments} deleteComment={deleteComment} />
                    <CommentWrite showSubmit={addComment} />
                </div>
                <div className="bar__bottom"></div>
            </div>
        </section>
    )
}

export default Section4