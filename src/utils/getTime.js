const getTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const min = date.getMinutes();
  return `${hours}:${min}`;
};

export default getTime;
