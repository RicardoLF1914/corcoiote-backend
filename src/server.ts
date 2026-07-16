import express from "express";
import errorHandler from "./middlewares/errorHandler.ts";
import requestLogger from "./middlewares/requestLogger.ts";
import CustomerRouter from "./routes/customer.router.ts";
import InvoiceRouter from "./routes/invoice.router.ts";

const app = express();

app.use(requestLogger);

app.use(express.json());

app.use("/customers", CustomerRouter);
app.use("/invoices", InvoiceRouter);

app.use((_request, response) => {
	response.status(404).json({ message: "Página não encontrada" });
});

app.use(errorHandler);

app.listen(Number(process.env.PORT));
