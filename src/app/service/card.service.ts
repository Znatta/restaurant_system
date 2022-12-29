import { prismaClient } from "../../database/prismaClient";

class CardService {
  public async create() {
    const createdCard = await prismaClient.card.create({
      data: { total: 0 }
    });

    return createdCard;
  }

  public async updateCPF(cardId: number, cpf: string) {
    const updatedCard = await prismaClient.card.update({
      where: { id: cardId },
      data: { cpf }
    });

    return updatedCard;
  }

  public async findOne(id: number) {
    const card = await prismaClient.card.findUnique({ where: { id } });

    if (!card) throw new Error("Card not found!");

    return card;
  }

  public async findOneByCpf(cpf: string) {
    const card = await prismaClient.card.findUnique({ where: { cpf } });

    if (!card) throw new Error("Card not found!");

    return card;
  }

  public findMany() {
    return prismaClient.card.findMany();
  }

  public async delete(id: number) {
    await this.findOne(id);

    const deletedCard = await prismaClient.card.delete({ where: { id } });

    return deletedCard.id;
  }
}

export default new CardService();
