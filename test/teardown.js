module.exports = async function () {
  await global.__SERVER__.close();
  await global.__UDP_SERVER__.close();
};
