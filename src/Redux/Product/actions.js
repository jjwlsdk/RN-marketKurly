const actions = {
  GET_DATA: "GET_DATA",
  OFF_SET: "OFF_SET",

  getData: (data) => ({
    type: actions.GET_DATA,
    payload: data
  }),
  getOffset: (data) => ({
    type: actions.OFF_SET,
    payload: data
  })
}

export default actions;