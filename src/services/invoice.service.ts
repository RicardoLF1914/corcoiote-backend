import { number } from "zod";
import { NotFoundError } from "../errors/index.ts";
import prisma from "../lib/prisma.ts";
import type {
	CreateInvoice,
	UpdateInvoice,
} from "../schemas/invoice.schema.ts";

export async function findAllInvoices(page: number) {
	const invoices = await prisma.invoice.findMany({
		include: { customer: true },
		orderBy: { date: "desc" },
		skip: (page - 1) * 10,
		take: 10,
	});

	return invoices;
}

export async function findInvoiceById(id: number) {
	const invoice = await prisma.invoice.findUnique({
		where: { id },
		include: { customer: true },
	});

	if (!invoice) {
		throw new NotFoundError(`Fatura com id ${id} não encontrada.`);
	}

	return invoice;
}

export async function insertInvoice({
	customerID,
	amount,
	status,
	date,
}: CreateInvoice) {
	const invoice = await prisma.invoice.create({
		data: {
			amount,
			status,
			date,
			customer: { connect: { id: customerID } },
		},
		include: { customer: true },
	});

	return invoice;
}

export async function modifyInvoice(
	id: number,
	{ customerID, amount, status, date }: UpdateInvoice,
) {
	await findInvoiceById(id);

	const invoice = await prisma.invoice.update({
		where: { id },
		data: { customerID, amount, status, date },
		include: { customer: true },
	});

	return invoice;
}

export async function removeInvoice(id: number) {
	await findInvoiceById(id);

	await prisma.invoice.delete({ where: { id } });
}
