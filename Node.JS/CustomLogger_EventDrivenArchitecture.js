const fs = require("fs");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = path.join(__dirname, "eventlog.txt"); // always same folder as script

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}\n`;

  console.log("LOG:", logMessage.trim()); // so you can see it in terminal too

  try {
    fs.appendFileSync(logFile, logMessage, "utf8");
  } catch (err) {
    console.error("Failed to write log file:", err.message);
  }
};

logger.on("message", logToFile);

setInterval(() => {
  const freePercent = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Free memory percent: ${freePercent.toFixed(2)}%`);
}, 5000);

logger.log("Application started");
logger.log("Application event occurred");
