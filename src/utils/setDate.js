const setDate = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "Mai",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const today = date.getDate();
  const year = date.getFullYear();

  const todaysDate = `${day}, ${month} ${today} ${year} `;
  return todaysDate;
};

export default setDate;
