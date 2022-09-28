import bcrypt from "bcrypt";

export function generateHashPassword(plainPassword) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(plainPassword, salt);

  return hash;
}

export function compareHash(plainPassword, hashPassword) {
  return bcrypt.compareSync(plainPassword, hashPassword);
}
