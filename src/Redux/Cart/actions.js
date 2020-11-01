const actions = {
  GET_DATA: "GET_DATA",
  CHECKED_DATA: "CHECKED_DATA",
  REMOVE_DATA: "REMOVE_DATA",
  UPDATE_COUNT_DATA: "UPDATE_COUNT_DATA",

  getData: (value) => ({
    type: actions.GET_DATA,
    payload: value,
  }),
  checkedData: (value) => ({
    type: actions.CHECKED_DATA,
    payload: value,
  }),
  removeData: (value) => ({
    type: actions.REMOVE_DATA,
    payload: value,
  }),
  updateCountData: (value) => ({
    type: actions.UPDATE_COUNT_DATA,
    payload: value,
  }),
};

export default actions;
