import { FC } from "react";
import { TodoType } from "./type/Todo";

export const Todo: FC<Omit<TodoType, "id">> = (
  // props: Pick<TodoType, "title" | "userId" | "completed">
  props
) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}:ユーザー: ${userId}`}</p>;
};
