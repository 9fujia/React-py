
export const banner = ({url,dispatch})=>{
    fetch(
        'api/banner'
    ).then(res=>res.json()).then(data=>{
        dispatch({type:'getBanner',payload:data.data})
        dispatch({type:'bLoading',payload:false})

    })
    return {type:'bLoading',payload:true}
}

//返回一个函数
/*export const asyncAction3 = ({url,dispatch,type}) => {

  return ()=>{

    dispatch( {type:'VIEW_LOADING',payload:true});

    fetch(
      url
    ).then(
      res=>res.json()
    ).then(
      res=>{
        setTimeout(()=>{
          dispatch({type:type,payload:res.item});
          dispatch({type:'VIEW_LOADING',payload:false});
        },1000)
      }
    );
  }
};*/

/*export const asyncAction3 = ({url,dispatch,type}) => ()=>{

  dispatch( {type:'VIEW_LOADING',payload:true});

  fetch(
    url
  ).then(
    res=>res.json()
  ).then(
    res=>{
      setTimeout(()=>{
        dispatch({type:type,payload:res.item});
        dispatch({type:'VIEW_LOADING',payload:false});
      },1000)
    }
  );
};*/

/*export const asyncAction3 = ({url,type}) => (dispatch,getState)=>{

  dispatch( {type:'VIEW_LOADING',payload:true});

  fetch(
    url
  ).then(
    res=>res.json()
  ).then(
    res=>{
      setTimeout(()=>{
        dispatch({type:type,payload:res.item});
        dispatch({type:'VIEW_LOADING',payload:false});
      },1000)
    }
  );
};*/

export const asyncAction3 = ({url,type}) => dispatch=>{

  dispatch( {type:'VIEW_LOADING',payload:true});

  return fetch(
    url
  ).then(
    res=>res.json()
  ).then(
    res=>{
      // setTimeout(()=>{
        dispatch({type:type,payload:res.item});
        dispatch({type:'VIEW_LOADING',payload:false});
        return res.item;
      // },1000)
    }
  );
};

