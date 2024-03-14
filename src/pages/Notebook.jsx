import { Spin, Table } from "antd";
import React from "react";
import { useGetAllData } from "./services/query/Alldata";

export const Notebook = () => {
  const { data, isLoading } = useGetAllData("laptop");

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
    <Spin style={{display: "flex", justifyContent: "center"}} size="large"  />
  ) : (
    <Table dataSource={dataSource} columns={columns} />
  );
};
