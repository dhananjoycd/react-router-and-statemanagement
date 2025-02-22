import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };

  return (
    <div style={postStyle}>
      <h4>Post of Id: {id}</h4>
      <p>{title}</p>
      <button onClick={() => navigate(`/posts/${id}`)}>More details</button>
    </div>
  );
};

export default Post;
