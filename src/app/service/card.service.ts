import { prismaClient } from "../../database/prismaClient";

class CardService {
  public async create() {
    const createdCard = await prismaClient.card.create({
      data: { total: 0 }
    });

    return createdCard;
  }

  public async updateCPF(cardId: number, cpf: number) {
    const updatedCard = await prismaClient.card.update({
      where: { id: cardId },
      data: { cpf }
    });

    return updatedCard;
  }
}

export default new CardService();
