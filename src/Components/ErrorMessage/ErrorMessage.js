import { ErrorMessageStyle } from "./ErrorMessageStyles";

export default function ErrorMessage() {
  return (
    <ErrorMessageStyle>
      <div>
        <h1>ERROR</h1>
        <h2>
          An error occured while trying to fetch the posts, please refresh the
          page clicking the button down below.
        </h2>
        <button onClick={() => window.location.reload(false)}>Reload</button>
      </div>
    </ErrorMessageStyle>
  );
}
