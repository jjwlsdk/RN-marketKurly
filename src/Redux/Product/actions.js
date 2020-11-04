const actions = {
  OFF_SET: "OFF_SET",
  GET_FILTER: "GET_FILTER",
  GET_DELIVERY: "GET_DELIVERY",

  getOffset: (data) => ({
    type: actions.OFF_SET,
    payload: data,
  }),
  getFilter: (data) => ({
    type: actions.GET_FILTER,
    payload: data,
  }),
  getDelivery: (data) => ({
    type: actions.GET_DELIVERY,
    payload: data,
  }),
};

export default actions;
