import { prismaClient } from "../../database/prismaClient";

class OrderService {
  public async create(cardId: number) {
    const createdOrder = await prismaClient.order.create({
      data: { total: 0, cardId }
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

  private async getItemsInOrder(orderId: number) {
    await this.findOne(orderId);

    const itemsInOrder = prismaClient.itemInOrder.findMany({
      where: { orderId }
    });

    return itemsInOrder;
  }

  private async getTotal(orderId: number) {
    const itemsInOrder = await this.getItemsInOrder(orderId);

    const totalOfEachItem = await Promise.all(
      itemsInOrder.map(async itemInOrder => {
        const item = await prismaClient.item.findUniqueOrThrow({
          where: { id: itemInOrder.itemId }
        });

        return item.price * itemInOrder.quantity;
      })
    );

    const total = totalOfEachItem.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);

    return total;
  }

  public async addItem(orderId: number, itemId: number, quantity: number) {
    await this.findOne(orderId);

    const itemAdded = await prismaClient.itemInOrder.create({
      data: { orderId, itemId, quantity }
    });

    await this.updateTotal(orderId);

    return itemAdded;
  }

  private async updateTotal(id: number) {
    await this.findOne(id);

    const total = await this.getTotal(id);

    await prismaClient.order.update({
      where: { id },
      data: { total }
    });
  }

  public async delete(id: number) {
    await this.findOne(id);

    const orderDeleted = await prismaClient.order.delete({ where: { id } });

    return orderDeleted.id;
  }
}

export default new OrderService();
