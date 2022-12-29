import { Card } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

class CardService {
  public async create() {
    const createdCard = await prismaClient.card.create({
      data: { total: 0 }
    });

    return createdCard;
  }

  public async updateCPF(card: Card, cpf: number) {
    const updatedCard = await prismaClient.card.update({
      where: { id: card.id },
      data: { cpf }
    });

    return updatedCard;
  }
}

export default new CardService();
