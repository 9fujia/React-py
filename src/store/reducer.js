
//纯函数 == 不修改输入，输出可控，定返回
// const reducer = (state,action) => {
const reducer = (state,{type,payload}) => {
  switch (type) {
    case 'bLoading':
      let newState1 = {...state,bLoading:payload};
      return newState1;
    case 'isLogin':
      let newState2 = {...state,isLogin:payload};
      return newState2;
    case 'getBanner':
      let banner = [...state.banner];
      banner.push(...payload);
      let newState = {...state,banner};
      return newState;
    default:
      return state;
  }

};

export default reducer;