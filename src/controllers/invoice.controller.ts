import type { Request, Response } from "express";
import * as InvoiceService from "../services/invoice.service.ts";
import type { CreateInvoice, UpdateInvoice } from "../types.ts";

export function getAllInvoice(_request: Request, response: Response) {
	const invoices = InvoiceService.findAllInvoices();

	response.status(200).json(invoices);
}

export function getInvoiceById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const invoice = InvoiceService.findInvoiceById(id);

	response.status(200).json(invoice);
}

export function createInvoice(request: Request, response: Response) {
	const { value, customer_id } = request.body as CreateInvoice;

	const invoice = InvoiceService.insertInvoice({ value, customer_id });

	response.status(201).json(invoice);
}

export function updateInvoice(request: Request, response: Response) {
	const id = Number(request.params.id);

	const { value, customer_id, status } = request.body as UpdateInvoice;

	const invoice = InvoiceService.modifyInvoice(id, {
		value,
		customer_id,
		status,
	});

	response.status(200).json(invoice);
}

export function deleteInvoice(request: Request, response: Response) {
	const id = Number(request.params.id);

	InvoiceService.removeInvoice(id);

	response.status(204).send();
}
