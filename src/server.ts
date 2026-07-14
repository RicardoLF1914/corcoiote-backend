import express from "express";
import CustomerRouter from "./routes/customer.router.ts";
import InvoiceRouter from "./routes/invoice.router.ts";

const app = express();

app.use(express.json());

app.use("/customers", CustomerRouter);
app.use("/invoices", InvoiceRouter);

app.use((_request, response) => {
	response.status(404).json({ message: "NOT FOUND" });
});

app.listen(Number(process.env.PORT));
