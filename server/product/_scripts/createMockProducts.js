const faker = require("faker");
const mongoose = require("mongoose");
const config = require("../../_config/config");

mongoose.connect(
  config.db,
  { config: { autoIndex: true }, useNewUrlParser: true }
);

const Product = require("../model/ProductModel");
const ProductStatics = require("../model/ProductStatics");

const dataAmount = 750;

const photoList = [
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200),
  faker.image.abstract(200, 200)
];

const colors = [
  "Amarelo-avermelhado",
  "Amarelo-canário",
  "Amarelo-cinzento",
  "Amarelo-enxofre",
  "Amarelo-esverdeado",
  "Amarelo-fosco",
  "Amarelo-gualdo",
  "Amarelo-limão",
  "Amarelo-ocre",
  "Amarelo-ouro",
  "Amarelo-palha",
  "Amarelo-torrado",
  "Azul-ardósia",
  "Azul-celeste",
  "Azul-cobalto",
  "Azul-ferrete",
  "Azul-marinho",
  "Azul-pavão",
  "Azul-petróleo",
  "Azul-piscina",
  "Azul-turquesa",
  "Azul-violeta",
  "Branco-sujo",
  "Castanho-avermelhado",
  "Cinza-ardósia",
  "Cinzento-azulado",
  "Cinzento-pérola",
  "Rosa-bebê",
  "Rosa-choque",
  "Verde-abacate",
  "Verde-água",
  "Verde-alface",
  "Verde-amarelo",
  "Verde-azul",
  "Verde-bandeira",
  "Verde-bronze",
  "Verde-cinza",
  "Verde-esmeralda",
  "Verde-garrafa",
  "Verde-mar",
  "Verde-militar",
  "Verde-musgo",
  "Verde-oliva",
  "Vermelho-alaranjado",
  "Vermelho-cereja",
  "Vermelho-púrpura",
  "Vermelho-tostado"
];

const productList = [];

for (let i = 0; i < dataAmount; i += 1) {
  const category = faker.random.arrayElement(
    Object.keys(ProductStatics.categories)
  );
  const subCategory = faker.random.arrayElement(
    ProductStatics.subCategories.exact(category)
  );
  const color = faker.random.arrayElement(colors);
  const adjective = faker.commerce.productAdjective();

  const product = {
    status: ProductStatics.statuses.ACTIVE,
    name: `${color} ${subCategory}`,
    category,
    subCategory,
    description: `${adjective} ${faker.commerce.productMaterial()}`,
    images: Array.from({ length: 4 }, () =>
      faker.random.arrayElement(photoList)
    ),
    price: faker.finance.amount(10, 3000, 2),
    deal: faker.random.boolean()
  };

  productList.push(product);
}

Product.insertMany(productList).then(() => {
  console.log(`${dataAmount} produtos criados com sucesso!`);
  process.exit();
});
