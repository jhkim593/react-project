import "./updateModal.css";
import { IconClose } from "assets";
import dayjs from "dayjs";
import React from "react";

dayjs.locale("ko");

function updateModal({
  isOpen, item, onClose, setTodoList, setClickedItem,
}) {
  if (!isOpen) return null;
  const { title, content } = item;

  const onUpdate = (e) => {
    e.preventDefault();

    // 빈문자열일때
    const newItem = {
      ...item,
      title: e.target.title.value,
      content: e.target.content.value,
      updatedAt: dayjs().format("YYYY.MM.DD HH:mm:ss"),
    };
    setTodoList((prev) => prev.map((temp) => (item.id === temp.id ? newItem : temp)));
    onClose();
  };

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setClickedItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="updateModalWrapper">
      <aside>
        <IconClose
          width="40px"
          height="40px"
          className="closeButton"
          onClick={onClose}
        />
        <form onSubmit={onUpdate}>
          <h1 className="modalTitle">제목</h1>
          <input
            placeholder="제목을 입력해주세요."
            name="title"
            value={title}
            onChange={onChange}
          />
          <h1 className="modalTitle">내용</h1>
          <textarea
            rows={12}
            placeholder="내용을 입력해주세요."
            name="content"
            value={content}
            onChange={onChange}
          />
          <button type="submit"> 수정</button>
        </form>
      </aside>
    </div>
  );
}

export default updateModal;
