import { faker } from "@faker-js/faker";

const fakeList = [];
function createRandomUser() {
  return {
    _id: faker.datatype.uuid(),
    image: faker.image.image(),
    title: faker.lorem.paragraph(1),
    description: faker.lorem.lines(3),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sexType(),
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
}

for (let i = 0; i < 100; i++) {
  const user = createRandomUser();
  fakeList.push(user);
}

export default fakeList;
