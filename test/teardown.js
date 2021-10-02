module.exports = async function () {
  await global.__SERVER__.close();
};
