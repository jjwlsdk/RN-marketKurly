const actions = {
  GET_DATA: "GET_DATA",
  OFF_SET: "OFF_SET",
  GET_ID: "GET_ID",
  GET_SLIDEDATA: "GET_SLIDEDATA",

  getData: (data) => ({
    type: actions.GET_DATA,
    payload: data
  }),
  getSlideData: (data) => ({
    type: actions.GET_SLIDEDATA,
    payload: data
  }),
  getOffset: (data) => ({
    type: actions.OFF_SET,
    payload: data
  }),
  getId: (data) => ({
    type: actions.GET_ID,
    payload: data
  })
}

export default actions;