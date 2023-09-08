import dayjs from "dayjs";
import React from "react";

dayjs.locale("ko");

function TopInfo({ onClickCreate }) {
  return (
    <>
      <h1>Our Todo List</h1>
      <div className="topNavbar">
        <time>
          TODAY:
          {dayjs().format("YYYY.MM.DD")}
        </time>
        <button type="button" className="addButton" onClick={onClickCreate}>
          추가
        </button>
      </div>
    </>
  );
}

export default TopInfo;
