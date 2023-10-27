function isValidWalk(walk) {
  if (walk.length === 1) return false;
  if (walk.length % 2 !== 0) return false;

  const directions = {
    n: "s",
    e: "w",
    s: "n",
    w: "e",
  };

  const path = {};

  walk.forEach((d) => {
    if (path[d]) {
      path[d] += 1;
    } else {
      path[d] = 1;
    }
  });

  return Object.keys(path).reduce((acc, cur) => {
    if (path[cur] === path[directions[cur]]) {
      acc = acc && true;
    } else {
      acc = false;
    }
    return acc;
  }, true);
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
