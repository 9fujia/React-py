
//纯函数 == 不修改输入，输出可控，定返回
// const reducer = (state,action) => {
const reducer = (state,{type,payload}) => {
  console.log('reducer',state,type,payload);
  switch (type) {
    case 'ADD_ITEM':
      // let list=[state.list];
      // list.push(payload);
      // let nState = {...state,list:list}
      // let nState = {...state,list};
      // return nState;
      // return Object.assign(合并后的对象,老,新)
      // return Object.assign({},state,{list:state.list.concat(payload)})
      return Object.assign({},state,{list:[...state.list,payload]});
    case 'VIEW_LOADING':
      return Object.assign({},state,{bLoading:payload});
    default:
      return state;
  }

};

export default reducer;