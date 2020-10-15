const bullsAndCows = (problem, answer) => {
  let strike = 0;
  let ball = 0;
  let goal = false;

  problem.forEach((pr, idx) => {
    answer.forEach((an, jdx) => {
      if (pr == an && idx == jdx) strike++;
      else if (pr == an && idx !== jdx) ball++;
    });
  });

  if (strike === problem.length) goal = true;

  return [strike, ball, goal];
};

export default bullsAndCows;
