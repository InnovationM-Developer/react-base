import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Card from "./CardComponent";
import { getUsers } from "../redux/actions/users";

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);
  console.log("users", users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      {users.length > 0 &&
        users.map((user) => {
          return (
            <>
              <Card user={user}></Card>;
            </>
          );
        })}
    </>
  );
};
export default Users;
