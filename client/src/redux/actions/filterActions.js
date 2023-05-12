export function filterByTypes(payload) {
    console.log(payload);
    return {
      type: "FILTER_BY_TYPE",
      payload,
    };
  }
  
  export function filterCreated(payload) {
    return {
      type: "FILTER_CREATED",
      payload,
    };  
  }
  
  export function emptyFilter() {
    return {
      type: "EMPTY_FILTER",
    };
  }
  
  export function orderByPower(payload) {
    return {
      type: "ORDER_BY_POWER",
      payload,
    };
  }
  
  export function orderByAbc(payload) {
    return {
      type: "ORDER_BY_ABC",
      payload,
    };
  }
  