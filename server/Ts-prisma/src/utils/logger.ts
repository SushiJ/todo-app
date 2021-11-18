import days from "dayjs";
import logger from "pino";

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${days().format()}"`,
});

export default log;
