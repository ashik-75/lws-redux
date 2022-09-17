export function getPartnersInfo(users, email) {
  return users.find((user) => user.email !== email);
}
