import cx from "classnames";
import React from "react";

function TodoItem({
  item,
  onClickedTitle,
  onClickDelete,
  onClickComplete,
  onClickUpdate,
}) {
  return (
    <article className={cx("todoItem", { complete: item.isComplete })}>
      <div>
        <p className="todoTitle" onClick={() => onClickedTitle()}>
          {item.title}
        </p>
        <time className="createdDate">{item.createdAt}</time>
      </div>
      <div>
        <button
          type="button"
          className="completeButton"
          onClick={onClickComplete}
        >
          {item.isComplete ? "완료 해제" : "완료"}
        </button>
        <button type="button" className="editButton" onClick={onClickUpdate}>
          수정
        </button>
        <button type="button" className="deleteButton" onClick={onClickDelete}>
          삭제
        </button>
      </div>
    </article>
  );
}

export default TodoItem;
