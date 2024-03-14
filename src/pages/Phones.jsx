import React from "react";
import { UseGetPhone } from "./services/query/UseGetPhone";

export const Phones = () => {
  const { data } = UseGetPhone("avto ");
  console.log(data);
  return <div>Phones</div>;
};
