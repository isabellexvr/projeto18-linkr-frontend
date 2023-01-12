export function sortByFollowing(followers, users) {
  const notFollower = [];
  const sortedArray = [];
  for (const user of users) {
    if (followers.includes(user.id)) {
      sortedArray.push(user);
    } else {
      notFollower.push(user);
    }
  }
  return [...sortedArray, ...notFollower];
}
