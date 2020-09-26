import React from "react";
import Post from "../Post/post";
import "./posts.css";

const postArray = [
  {
    authorImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
    authorName: "Anakin Skywalker",
    authorNickname: "@dart_vader",
    postImage:
      "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    postContent: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    postDate: "26 Feb.",
  },
  {
    authorImage:
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F03%2Fstar-wars-a-new-hope-2000.jpg",
    authorName: "Luke Skywalker",
    authorNickname: "@last_jedi",
    postImage:
      "https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1557/15576725/3587617-rey.jpg",
    postContent: "Congrats! You are grandpa))",
    postDate: "27 Feb.",
  },
  {
    authorImage:
      "https://lh3.googleusercontent.com/proxy/BKxaidSh7zT8kqNjGB6-tfSwhMDBb5hmd-zrOEQwprYIyJyqWJRjRj01xM587MJzGGTgUYMmFIDbAaTtJMFLIGi1ULuafehgcshbkaslxCXEnHjE7iytm792hMcR8R8TASV-JomhMpHFrj8FFm7zx8SzmAwlhj-O",
    authorName: "Ray Skywalker",
    authorNickname: "@rogue",
    postImage:
      "https://specials-images.forbesimg.com/imageserve/5e01fac525ab5d0007cf2ed3/960x0.jpg?fit=scale",
    postContent: "Whaaaaat?",
    postDate: "28 Feb.",
  },
];

class Posts extends React.Component {
  state = {};

  render() {
    return (
      <div className="posts-wrapper">
        {postArray.map((post) => {
          return (
            <Post
              name={post.authorName}
              photo={post.authorImage}
              nickname={post.authorNickname}
              content={post.postContent}
              image={post.postImage}
              date={post.postDate}
            />
          );
        })}
      </div>
    );
  }
}

export default Posts;
