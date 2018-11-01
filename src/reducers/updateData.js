const INITIAL_STATE = {
  data: ['hello', 'hello2'],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
