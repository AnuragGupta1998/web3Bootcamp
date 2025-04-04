import React from "react";
import { useQuery} from "@tanstack/react-query";


async function fetchPosts() {
  return await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => data);
}

function Post() {

  // const query = useQuery({ queryKey: ["posts"], queryFn: fetchPosts, refetchInterval: 5*1000 });
  const {data,isLoading,error} = useQuery({ queryKey: ["posts"], queryFn: fetchPosts, refetchInterval: 5*1000 }); //it refetches every 5 seconds

  if (error) {
    return <div>Error: {query.error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

//   return <div>{JSON.stringify(query.data)}</div>;
  return <div> {data.map((p)=> <div key={p.id}>{p.id}:- {p.body}</div>)}</div>;

//   if (query.error) {
//     return <div>Error: {query.error.message}</div>;
//   }

//   if (query.isLoading) {
//     return <div>Loading...</div>;
//   }

// //   return <div>{JSON.stringify(query.data)}</div>;
//   return <div> {query.data.map((p)=> <div>{p.title}</div>)}</div>;
}

export default Post;
