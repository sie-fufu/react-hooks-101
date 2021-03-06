// action = {
//  type: 'CREATE_EVENT
//  title: '2020東京オリンピックのお知らせ’
//  body: ’2020年に東京でオリンピックを開催します!つきましては,,,
// }
//  state= []
//  state= [
//  {},
//  ]
//
const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
    case "DELETE_EVENT":
    case "DELETE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
