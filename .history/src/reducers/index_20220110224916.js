// action = {
//  type: 'CREATE_EVENT
//  title: '2020東京オリンピックのお知らせ’
//  body: ’2020年に東京でオリンピックを開催します!つきましては,,,
// }
// #before
//  state= []
// #after
// state = [
//    {
//      id: 1,
//      title: '2020東京オリンピックのお知らせ’
//      body: ’2020年に東京でオリンピックを開催します!つきましては,,,
//    }
//  ]
// #before
//  state= [
//  { id: 1, title: 'タイトル1', body: 'ボディ1'},
//  { id: 2, title: 'タイトル2', body: 'ボディ2'},
//  { id: 3, title: 'タイトル3', body: 'ボディ3'},
//  ]
//
//  #after
//  state= [
//  { id: 1, title: 'タイトル1', body: 'ボディ1'},
//  { id: 2, title: 'タイトル2', body: 'ボディ2'},
//  { id: 3, title: 'タイトル3', body: 'ボディ3'},
//  {   id: 4,
//      title: '2020東京オリンピックのお知らせ’
//      body: ’2020年に東京でオリンピックを開催します!つきましては,,,
//   }
//  ]
//
const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
    case "DELETE_EVENT":
    case "DELETE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;