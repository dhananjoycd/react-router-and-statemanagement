import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const postUrl = useLocation();

  console.log(postUrl.pathname);

  const { id, title, body } = post;

  return (
    <div>
      <h3>POst details about: {id}</h3>
      <h5> pathe name: {postUrl.pathname}</h5>
      <p>Title: {title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default PostDetails;
