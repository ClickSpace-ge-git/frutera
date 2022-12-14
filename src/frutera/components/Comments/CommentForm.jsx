import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
    isRepling,
    setReplyFalse,
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
    if(isRepling){
      setReplyFalse()
    }
  };
  return (
    <form onSubmit={onSubmit} className="CommentForm">
      <textarea
        className="CommentForm_textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="CommentForm_button_div">
        <button className="CommentForm_button" disabled={isTextareaDisabled}>
          {submitLabel}
        </button>
        {hasCancelButton && (
            <button
                type="button"
                className="CommentForm_button"
                onClick={handleCancel}
            >
              Cancel
            </button>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
