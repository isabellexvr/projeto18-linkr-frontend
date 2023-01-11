export default function handleLikedBy(arr, userInfo) {
    let string;
    console.log(arr[0].username)

    if (arr.find((e) => e.userId === userInfo.userId)) {
      if (arr.length === 1 && arr[0].username === null) {
        string = "Nobody liked this post yet.";
        return string;
      }
      if (arr.length > 2) {
        string = `You ${arr[arr.length - 1].username} and other ${
          arr.length - 2
        } people liked it.`;
        return string;
      }
      if (arr.length === 2) {
        string = `You and ${arr[arr.length - 1].username} liked this post.`;
        return string;
      } else {
        return (string = "You liked it.");
      }
    }

    if (arr.length === 1 && arr[0].username === null) {
      string = "Nobody liked this post yet.";
      return string;
    }
    if (arr.length > 2) {
      string = `${arr[arr.length - 1].username} , ${
        arr[arr.length - 2].username
      } and other ${arr.length - 2} peopls liked it.`;
      return string;
    } else if (arr.length === 2) {
      string = `${arr[arr.length - 1].username} , ${
        arr[arr.length - 2].username
      } liked it.`;
      return string;
    } else {
      return (string = `${arr[arr.length - 1].username}, liked.`);
    }
  }