const winston = require("winston");
require("winston-daily-rotate-file");
const fs = require("fs");
const path = require("path");

const logPath = path.join(process.cwd(), "logs");
if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath);
}

const option = {
  file: {
    filename: `${logPath}/app-%DATE%.log`,
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxFile: 3,
    level: "debug",
    maxFiles: "3d",
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};
const { createLogger, format, transports } = winston;
const { combine, printf } = format;
const logger = createLogger({
  transports: [
    new transports.Console(option.console),
    new transports.DailyRotateFile(option.file),
  ],
  format: combine(
    format.timestamp(),
    printf(({ level, timestamp, message }) => {
      const lvl = level.toUpperCase();
      return `${lvl} [TIMESTAMP=${timestamp}] [MESSAGE=${message}]`;
    })
  ),
});
module.exports = logger;
