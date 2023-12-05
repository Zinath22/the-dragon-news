export function getCurrentDate() {
  // Create a new Date object to get the current date and time
  const currentDate = new Date();

  // Get the day, month, date, and year
  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const dayOfMonth = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Display the result
  return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}

// Call the function to display the current date
getCurrentDate();
