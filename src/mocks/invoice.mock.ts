import type { Invoice } from "../types.ts";

export const invoices: Invoice[] = [
	{
		id: 1,
		value: "150.00",
		customer_id: 1,
		status: "pending",
		created_at: new Date().toISOString(),
	},
	{
		id: 2,
		value: "320.50",
		customer_id: 2,
		status: "paid",
		created_at: new Date().toISOString(),
	},
	{
		id: 3,
		value: "89.90",
		customer_id: 1,
		status: "pending",
		created_at: new Date().toISOString(),
	},
];
