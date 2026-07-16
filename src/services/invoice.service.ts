import { NotFoundError } from "../errors/index.ts";
import { invoices } from "../mocks/invoice.mock.ts";
import type { CreateInvoice, Invoice, UpdateInvoice } from "../types.ts";

export function findAllInvoices(): Invoice[] {
	return invoices;
}

export function findInvoiceById(id: number): Invoice {
	const invoice = invoices.find((c) => c.id === id);

	if (!invoice) throw new NotFoundError(`Fatura de id ${id} não encontrada`);

	return invoice;
}

export function insertInvoice({ value, customer_id }: CreateInvoice): Invoice {
	const invoice: Invoice = {
		id: invoices[invoices.length - 1].id + 1,
		value: value,
		customer_id: customer_id,
		status: "pending",
		created_at: new Date().toISOString(),
	};

	invoices.push(invoice);

	return invoice;
}

export function modifyInvoice(
	id: number,
	{ value, customer_id, status }: UpdateInvoice,
): Invoice {
	const invoice = invoices.find((c) => c.id === id);

	if (!invoice) throw new NotFoundError(`Fatura de id ${id} não encontrada`);

	if (value) invoice.value = value;
	if (customer_id) invoice.customer_id = customer_id;
	if (status !== undefined) invoice.status = status;

	return invoice;
}

export function removeInvoice(id: number): void {
	const index = invoices.findIndex((c) => c.id === id);

	if (index === -1)
		throw new NotFoundError(`Fatura de id ${id} não encontrada`);

	invoices.splice(index, 1);
}
