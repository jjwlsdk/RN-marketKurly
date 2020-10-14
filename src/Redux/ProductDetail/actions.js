const actions = {
  SET_DATA: "SET_DATA",
  SET_ID: "SET_ID",

  setData: (data) => ({
    type: actions.SET_DATA,
    data,
  }),

  setId: (id) => ({
    type: actions.SET_ID,
    id,
  }),
};

export default actions;
