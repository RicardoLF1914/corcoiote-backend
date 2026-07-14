export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type CreateCustomer = Omit<Customer, "id" | "status">;
export type UpdateCustomer = Partial<Omit<Customer, "id">>;

export type Invoice = {
	id: number;
	value: string;
	customer_id: number;
	status: "pending" | "paid";
	created_at: string;
};

export type CreateInvoice = Omit<Invoice, "id" | "status" | "created_at">;
export type UpdateInvoice = Partial<Omit<Invoice, "id" | "created_at">>;
