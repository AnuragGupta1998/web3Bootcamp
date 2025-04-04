import React,{useState,useEffect} from "react";
import axios from "axios";


function FetchDataWeb2() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  //  const post= fetch('https://jsonplaceholder.typicode.com/posts').json();
  // useEffect(() => {
  //   const fetchPost = () => {
  //     const res = fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data))
  //       .catch((error) => console.error("Error fetching posts:", error));
  //   };
  //   fetchPost();
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }
  , []);

  //axios request to jsonplaceholder
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         setPosts(response.data);
//         setLoader(true);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     setInterval(() => {
//       fetchPosts();
//     }, 5000);
//   }, []);
  return (
    <>
      {/* <h1>hi there{JSON.stringify(posts)}</h1> */}
      {loader && <h2> two </h2>}

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          {/* <p>{post.body}</p> */}
        </div>
      ))}
    </>
  );
}

export default FetchDataWeb2;
