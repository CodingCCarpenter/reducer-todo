export const initialState = [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ];
  
  export const reducer = (state, action) => {
      //pass in value we want to look at (action.type)
    switch (action.type) {
        //create 'cases' for each possible value
      case "SUBMIT":
        return [...state, action.payload];
      case "COMPLETE?":
        return state.map((item) => {
          if (action.payload === item.id) {
              //toggle item.completed
            return { ...item, completed: !item.completed };
          }
          //return item if not
          return item;
        });
      case "CLEAR":
          //clear completed items
        return state.filter((item) => item.completed === false);
        //'catch-all' to return state untouched:
      default:
        return state;
    }
  };