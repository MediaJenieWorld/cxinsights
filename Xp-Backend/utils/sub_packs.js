const subscriptionPacks = [
  {
    name: "FREE TRIAL",
    price: 0,
    days: 7,
    availableFields: "description",
    notAvailableFields: "-imgUrl -actionItemExample",
  },
  {
    name: "BRONZE",
    price: 250,
    days: 30,
    availableFields: "description -imgUrl actionItemExample",
    notAvailableFields: "-imgUrl",
  },
  {
    name: "SILVER",
    price: 600,
    days: 30,
    availableFields: "description imgUrl actionItemExample",
    notAvailableFields: "",
  },
  {
    name: "GOLD",
    price: 750,
    days: 30,
    availableFields: "description imgUrl actionItemExample",
    notAvailableFields: "",
  },
];
module.exports = {
  subscriptionPacks,
};
