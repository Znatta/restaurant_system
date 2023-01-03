import { prismaClient } from "../../database/prismaClient";

class OrderService {
  public async create() {
    const createdOrder = await prismaClient.order.create({
      data: { total: 0 }
    });

    return createdOrder;
  }

  public async findOne(id: number) {
    const order = await prismaClient.order.findUnique({ where: { id } });

    if (!order) throw new Error("Order Not Found!");

    return order;
  }

  public async findMany() {
    return await prismaClient.order.findMany();
  }

  public async delete(id: number) {
    await this.findOne(id);

    const orderDeleted = await prismaClient.order.delete({ where: { id } });

    return orderDeleted.id;
  }
}

export default new OrderService();
