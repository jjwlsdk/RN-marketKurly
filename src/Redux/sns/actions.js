const actions = {
  TAG: "TAG",
  GET_DATA: "GET_DATA",
  FILTER_DATA: "FILTER_DATA",

  tag: (value) => ({
    type: actions.TAG,
    payload: value,
  }),

  getData: (value) => ({
    type: actions.GET_DATA,
    payload: value,
  }),

  filterData: (value) => ({
    type: actions.FILTER_DATA,
    payload: value,
  }),
};

export default actions;
