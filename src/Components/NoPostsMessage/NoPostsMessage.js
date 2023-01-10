import { NoPostsMessageStyle } from "./NoPostsMessageStyles";

export default function NoPostsMessage() {
  return (
    <NoPostsMessageStyle>
      <h1>There are no posts yet.</h1>
      <button onClick={() => window.location.reload(false)}>Reload</button>
    </NoPostsMessageStyle>
  );
}
