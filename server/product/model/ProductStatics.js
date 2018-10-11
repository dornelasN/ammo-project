exports.categories = {
  BED: "BED",
  BATH: "BATH",
  DECORATION: "DECORATION",
  KIDS: "KIDS",
  BABY: "BABY",
  SCENT: "SCENT",
  KITCHEN: "KITCHEN",
  OTHER: "OTHER"
};

exports.statuses = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  DELETED: "DELETED"
};

exports.subCategories = {
  exact(category) {
    return {
      BED: [
        'Lençóis',
        'Colchas',
        'Edredons e Capas de Edredom',
        'Kit Cama',
        'Mantas e Cobertores',
        'Almofadas',
        'Porta-travesseiros',
        'Travesseiros',
        'Saia para Cama',
        'Protetor de Colchão',
        'Protetor de Travesseiro'
      ],
      BATH: [
        'Jogo de Toalha',
        'Toalha de Banho',
        'Toalha de Rosto',
        'Toalha Gigante',
        'Toalha Lavabo',
        'Roupões',
        'Toalha de Piso',
        'Chinelo'
      ],
      DECORATION: [
        'Porta-Retratos',
        'Almofadas',
        'Difusores',
        'Objetos de Decoração',
        'Garrafa',
        'Velas',
        'Vasos',
        'Decor para Banho',
      ],
      KIDS: [
        'Colcha Infantil',
        'Jogo de Lençol Infantil',
        'Edredom Infantil',
        'Toalha Infantil',
        'Roupão Infantil',
        'Manta Infantil',
        'Almofada Infantil',
        'Porta-travesseiro Infantil',
        'Sapatilha Infantil',
      ],
      BABY: [
        'Lençóis',
        'Mantas e Cobertores',
        'Travesseiros',
      ],
      SCENT: [
        'Aromatizador de Ambiente',
        'Água de Passar',
        'Difusor com Aroma',
        'Sabonete Líquido',
        'Creme Hidratante',
        'Refil',
      ],
      KITCHEN: [
        'Toalha de Mesa',
        'Pano de Copa',
        'Avental',
      ],
      OTHER : [
        'Sleepwear',
      ],
    }[category]
  },
};