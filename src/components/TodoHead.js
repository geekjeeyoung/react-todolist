import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const now = new Date();

function TodoHead() {
  const todayDate = () => {
    const todayYear = now.getFullYear();
    const todayMonth = now.getMonth() + 1;
    const todayDate = now.getDate();

    return todayYear + "년 " + todayMonth + "월 " + todayDate + "일";
  };

  const todayDay = () => {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = week[now.getDay()];

    return dayOfWeek + "요일";
  };

  return (
    <TodoHeadBlock>
      <h1>{todayDate()}</h1>
      <div className="day">{todayDay()}</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
