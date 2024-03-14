import React from "react";
import { useGetAllData } from "./services/query/Alldata";
import { Spin, Table } from "antd";
import { usePost } from "./services/mutation/usePost";
import { useForm } from "react-hook-form";

export const Phones = () => {
  const { data, isLoading } = useGetAllData("phones");
  const { mutate } = usePost("phones");
  const { register, reset, handleSubmit } = useForm();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        reset()
      },
    });
  };
  const dataSource = data?.map((phone) => ({
    key: phone.id,
    img: (
      <img style={{ width: "50px", height: "50px" }} src={phone.img} alt="" />
    ),
    title: phone.title,
    price: "$" + phone.price,
    count: phone.count,
  }));

  const columns = [
    {
      title: "Img",
      dataIndex: "img",
      key: "img",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
  ];

  return isLoading ? (
    <Spin style={{ display: "flex", justifyContent: "center" }} size="large" />
  ) : (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register("img", { required: true })} type="text" />
        <input {...register("title", { required: true })} type="text" />
        <input {...register("price", { required: true })} type="number" />
        <input {...register("count", { required: true })} type="number" />
        <button>Submit</button>
      </form>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};
