export type Customer = {
	id: number;
	name: string;
	email: string;
	imageUrl: string | null;
};

type InvoiceStatus = "PENDING" | "PAID";

export type invoice = {
	id: number;
	amount: number;
	status: InvoiceStatus;
	date: Date;
	customerId: number;
	createdAt: Date;
};

export type ValidationFieldError = {
	field: string;
	message: string;
};
