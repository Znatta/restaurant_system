import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { prismaClient } from "../../database/prismaClient";

class TableService {
  public async create(description: string) {
    const createdTable = prismaClient.table.create({
      data: { description }
    });

    return createdTable;
  }

  public async book(id: number, cardId: number) {
    const tableToBeBooked = await this.findOne(id);

    if (tableToBeBooked.occupied)
      throw new Error("This table is already occupied");

    try {
      const tableBooked = await prismaClient.table.update({
        where: { id },
        data: { occupied: true, cardId }
      });

      return tableBooked;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError)
        if (error.code === "P2002")
          throw new Error("Already exist a table with this card");
    }
  }

  public async unBook(id: number) {
    const tableToBeUnbooked = await this.findOne(id);

    if (!tableToBeUnbooked.occupied)
      throw new Error("This table is not occupied");

    const tableUnbooked = await prismaClient.table.update({
      where: { id },
      data: { occupied: false, cardId: null }
    });

    return tableUnbooked;
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
