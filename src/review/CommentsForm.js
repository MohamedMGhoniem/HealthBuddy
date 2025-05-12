import { useEffect, useState } from 'react';

export default function CommentsForm({
  onAddComment,
  comment,
  onSubmitComment,
  onCloseForm,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`form-container ${mounted ? 'shown' : ''}`}>
      <button className="btn-close" onClick={onCloseForm}>
        <svg className="icon">
          <use href="./svg.svg#icon-close"></use>
        </svg>
      </button>
      <form className="form-comment" onSubmit={onSubmitComment}>
        <textarea
          required
          value={comment}
          placeholder="add new comment"
          onChange={onAddComment}
        >
          {comment}
        </textarea>
        <button className="btn-submit-comment" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
