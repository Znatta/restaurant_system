import { prismaClient } from "../../database/prismaClient";

export class TableService {
  public static async create(description: string) {
    const createdTable = await prismaClient.table.create({
      data: { description }
    });

    return createdTable;
  }

  public async findOne(id: number) {
    return await prismaClient.table.findUnique({ where: { id } });
  }

  public async findMany() {
    return await prismaClient.table.findMany();
  }

  public async delete(id: number) {}
}
