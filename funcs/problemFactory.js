const RandomNumberGenerator = (range) => Math.floor(Math.random() * range);

const problemFactory = (balls, range = 10) => {
  let problem = [];
  let population = [...Array(range).keys()];

  for (let i = 0; i < balls; i++) {
    const randomIndex = RandomNumberGenerator(range);
    const sample = population[randomIndex];
    population = population.filter((element) => element !== sample);
    problem.push(sample);
    range -= 1;
  }
  return problem;
};

export default problemFactory;
