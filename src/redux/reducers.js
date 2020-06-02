const initialStateSearch = {
  searchField: "",
};
export const searchRobotsReducer = (
  state = initialStateSearch,
  action = {}
) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return {
        ...state,
        searchField: action.payload,
      };

    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: true,
  robots: [],
  error: "",
};

export const requestRobotsReducer = (
  state = initialStateRobots,
  action = {}
) => {
  switch (action.type) {
    case "REQUEST_ROBOTS_PENDING":
      return {
        ...state,
        isPending: true,
      };
    case "REQUEST_ROBOTS_SUCCESS":
      return {
        ...state,
        robots: action.payload,
        isPending: false,
      };
    case "REQUEST_ROBOTS_FAILED":
      return {
        ...state,
        error: action.payload,
        isPending: true,
      };
    default:
      return state;
  }
};
