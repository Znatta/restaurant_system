import { Table } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

class TableService {
  public async create(description: string): Promise<Table> {
    const createdTable = prismaClient.table.create({
      data: { description }
    });

    return createdTable;
  }

  public async reserve(id: number) {
    const tableToBeReserved = await this.findOne(id);

    if (tableToBeReserved.occupied)
      throw new Error("This table is already occupied");

    const tableReserved = await prismaClient.table.update({
      where: { id },
      data: { occupied: true }
    });

    return tableReserved;
  }

  public async unreserve(id: number) {
    const tableToBeUnreserved = await this.findOne(id);

    if (!tableToBeUnreserved.occupied)
      throw new Error("This table is not occupied");

    const tableUnreserved = await prismaClient.table.update({
      where: { id },
      data: { occupied: false }
    });

    return tableUnreserved;
  }

  public async findOne(id: number) {
    const table = await prismaClient.table.findUnique({ where: { id } });

    if (!table) throw new Error("Table Not Found!");

    return table;
  }

  public async findMany() {
    return await prismaClient.table.findMany();
  }

  public async delete(id: number) {
    await this.findOne(id);

    const tableDeleted = await prismaClient.table.delete({ where: { id } });

    return tableDeleted.id;
  }
}

export default new TableService();
