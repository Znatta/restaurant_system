import { Item } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

class ItemService {
  public async create(item: Item) {
    const createdItem = await prismaClient.item.create({ data: item });

    return createdItem;
  }

  public async findMany() {
    return prismaClient.item.findMany();
  }

  public async findOne(id: number) {
    const item = await prismaClient.item.findUnique({ where: { id } });

    if (!item) throw new Error("Item Not Found!");

    return item;
  }

  public async delete(id: number) {
    await this.findOne(id);

    const deletedItem = await prismaClient.item.delete({ where: { id } });

    return deletedItem.id;
  }
}

export default new ItemService();
