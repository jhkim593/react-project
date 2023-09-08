import React from "react";

function Empty({ isView }) {
  if (!isView) return null;
  return <span className="emptyText">추가해주세요</span>;
}

export default Empty;
