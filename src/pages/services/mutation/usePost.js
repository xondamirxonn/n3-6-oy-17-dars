import { useMutation } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../config/request";

export const usePost = (datakey) => {
  return useMutation({
    mutationKey: ["post", datakey],
    mutationFn: (data) =>
      request.post(`${datakey}`, data).then((res) => res.data),
  });
};
