import "./createModal.css";
import { IconClose } from "assets";
import React, { useState } from "react";
import { generatedId } from "utils";
import dayjs from "dayjs";

dayjs.locale("ko");

const INITIAL_VALUE = {
  title: "",
  content: "",
};
function CreateModal({ isOpen, onClose, setTodoList }) {
  const [value, setValue] = useState({
    INITIAL_VALUE,
  });

  const onCreate = (e) => {
    e.preventDefault();
    // 빈문자열일때
    if (!value.title || !value.content) return;

    const newItem = {
      id: generatedId(),
      ...value,
      createdAt: dayjs().format("YYYY.MM.DD HH:mm:ss"),
      updatedAt: dayjs().format("YYYY.MM.DD HH:mm:ss"),
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newItem]);
    onClose();
    setValue(INITIAL_VALUE);
  };

  const onChange = (e) => {
    const { name, value: inputValue } = e.currentTarget;
    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  if (!isOpen) return null;
  return (
    <div className="createModalWrapper">
      <aside>
        <IconClose
          width="40px"
          height="40px"
          className="closeButton"
          onClick={onClose}
        />
        <form onSubmit={onCreate}>
          <h1 className="modalTitle">제목</h1>
          <input
            placeholder="제목을 입력해주세요."
            name="title"
            value={value.title}
            onChange={onChange}
          />
          <h1 className="modalTitle">내용</h1>
          <textarea
            rows={12}
            placeholder="내용을 입력해주세요."
            name="content"
            value={value.content}
            onChange={onChange}
          />
          <button type="submit"> 생성</button>
        </form>
      </aside>
    </div>
  );
}

export default CreateModal;
