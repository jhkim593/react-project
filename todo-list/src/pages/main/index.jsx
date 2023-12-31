import "./main.css";
import { CreateModal, DetailModal, UpdateModal } from "components";
import React, { useEffect, useState } from "react";
import { getTodosApi, deleteTodoApi } from "service";
import { useNavigate } from "react-router-dom";
import TodoItem from "./todoItem";
import Empty from "./empty";
import TopInfo from "./topInfo";

function MainPage() {
  const navigate = useNavigate();

  const [clickedItem, setClickedItem] = useState(null);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const getTodoList = async () => {
    const { data } = await getTodosApi();
    setTodoList(data);
  };
  const onCloseModal = (key) => {
    if (key === "detail" || "update") {
      if (key === "detail") {
        setIsOpenDetailModal(false);
      }
      if (key === "update") {
        setIsOpenUpdateModal(false);
      }
      setClickedItem(null);
    }
    if (key === "create") setIsOpenCreateModal(false);
  };

  const onClickDelete = (id) => () => {
    deleteTodoApi(id).then(async () => {
      await getTodoList();
    });
    // const deletedList = todoList.filter((item) => item.id !== id);
    // setTodoList(deletedList);
  };

  const onClickComplete = (id) => () => {
    const updatedList = todoList.reduce((acc, cur) => {
      if (cur.id === id) {
        return [
          ...acc,
          {
            ...cur,
            isComplete: !cur.isComplete,
          },
        ];
      }
      return [...acc, cur];
    }, []);
    setTodoList(updatedList);
  };

  const onClickedItem = (id) => {
    const getItem = todoList.find((item) => item.id === id);
    if (!getItem) return;
    setClickedItem(getItem);
  };

  const onClickedTitle = (id) => () => {
    navigate(`todos/${id}`);
    // onClickedItem(id);
    // setIsOpenDetailModal(true);
  };

  const onClickedUpdate = (id) => () => {
    onClickedItem(id);
    setIsOpenUpdateModal(true);
  };
  const onClickCreate = () => {
    setIsOpenCreateModal(true);
  };

  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <>
      <main>
        <TopInfo onClickCreate={onClickCreate} />
        <section className="todoList">
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onClickDelete={onClickDelete(item.id)}
              onClickComplete={onClickComplete(item.id)}
              onClickedTitle={onClickedTitle(item.id)}
              onClickUpdate={onClickedUpdate(item.id)}
            />
          ))}
          <Empty isView={todoList.length === 0} />
        </section>
      </main>
      <DetailModal
        isOpen={isOpenDetailModal}
        item={clickedItem}
        onClose={() => onCloseModal("detail")}
      />
      <CreateModal
        isOpen={isOpenCreateModal}
        setTodoList={setTodoList}
        onClose={() => onCloseModal("create")}
      />
      <UpdateModal
        isOpen={isOpenUpdateModal}
        item={clickedItem}
        setTodoList={setTodoList}
        onClose={() => onCloseModal("update")}
        setClickedItem={setClickedItem}
      />
    </>
  );
}

export default MainPage;
