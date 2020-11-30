export const message = [
  "sdasdsad",
  "dasdasdasd",
  "asdasdasdasdas",
  "sdsadsa",
  "ksahdjkas",
];

export const getRandomMessage = (message) => {
  return message[Math.floor(Math.random() * message.length)];
};
