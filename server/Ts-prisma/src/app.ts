import logger from "./utils/logger";
import express, { urlencoded } from "express";
import cors from "cors";
import { routes } from "./routes";
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use(cors());
app.get("/check", (req, res) => {
  res.sendStatus(200);
});

const PORT = process.env.PORT;
app.listen(PORT || 4000, async () => {
  routes(app);
  logger.info(`server started at http://localhost:${PORT}`);
});
