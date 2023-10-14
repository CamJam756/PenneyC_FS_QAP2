const fs = require("fs");
const path = require("path");

// Function to log events to console and write them to disk
function logEvent(event) {
  // Log event to console
  console.log(event);

  // Create a new log file with the current date
  const currentDate = new Date();
  const logFileName = `log_${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}.txt`;
  const logFilePath = path.join(__dirname, "logs", logFileName);

  // Append the event to the log file
  fs.appendFile(logFilePath, event + "\n", (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
}

// Usage example
logEvent("Event 1");
logEvent("Event 2");
