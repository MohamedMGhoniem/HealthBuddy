import { useEffect, useState } from 'react';

export default function CommentsForm({ comments, setComments, onCloseForm }) {
  const [mounted, setMounted] = useState(false);
  const [commentTxt, setCommentTxt] = useState('');
  const [rateNum, setRateNum] = useState(1);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleSubmitComment(e) {
    e.preventDefault();
    console.log('submited');
    onCloseForm();
    if (commentTxt !== '' && commentTxt.length > 3)
      setComments([
        ...comments,
        { quote: commentTxt, name: userName, stars: Number(rateNum) },
      ]);
    setCommentTxt('');
  }

  return (
    <div className={`form-container ${mounted ? 'shown' : ''}`}>
      <button className="btn-close" onClick={onCloseForm}>
        <svg className="icon">
          <use href="./svg.svg#icon-close"></use>
        </svg>
      </button>
      <form className="form-comment" onSubmit={handleSubmitComment}>
        <textarea
          required
          value={commentTxt}
          placeholder="add new comment"
          onChange={e => setCommentTxt(e.target.value)}
        >
          {commentTxt}
        </textarea>
        <div className="form-controls">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <input
            type="number"
            min={'1'}
            max={'5'}
            required
            value={rateNum}
            onChange={e => setRateNum(e.target.value)}
          />
          <button className="btn-submit-comment" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
