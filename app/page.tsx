"use client";
import { useQuery } from "@tanstack/react-query";
import { client } from "./apiClient";

const getHello = () => {
  return useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const res = await client.api.hello.$get({ query: { q: "Hello" } });
      return res.json();
    },
  });
};

export default function Home() {
  const { data, error } = getHello();
  if (error) return <p>Error</p>;

  if (!data?.message) return <p>Loading...</p>;

  return <p>{data?.message}</p>;
}
