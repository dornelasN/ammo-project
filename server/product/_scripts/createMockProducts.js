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
  "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/763148/pexels-photo-763148.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/235127/pexels-photo-235127.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/12679/pexels-photo-12679.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/212269/pexels-photo-212269.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/1304110/pexels-photo-1304110.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/67723/pexels-photo-67723.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/275845/pexels-photo-275845.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/275765/pexels-photo-275765.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/278664/pexels-photo-278664.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/208153/pexels-photo-208153.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/266039/pexels-photo-266039.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/971435/pexels-photo-971435.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/1183942/pexels-photo-1183942.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/326592/pexels-photo-326592.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&h=65",
  "https://images.pexels.com/photos/1097439/pexels-photo-1097439.jpeg?auto=compress&cs=tinysrgb&h=65"
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
  const name = subCategory.split(" ")[0];

  const product = {
    status: ProductStatics.statuses.ACTIVE,
    name: ` ${name} ${color}`,
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
