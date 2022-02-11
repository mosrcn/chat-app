let users = [];

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const addUser = (data) => {
  const existing = users.find((user) => user.room === data.room && user.username === data.name);
  if (existing) return existing;

  const user = { ...data };
  users.push(user);
  return user;
};

const removeUser = (id) => {
  const existing = users.find((user) => user.id === id);
  if (!existing) return;

  users = users.filter((user) => user.id !== existing.id);
  return existing;
};

module.exports = { getUser, addUser, removeUser };
