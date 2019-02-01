import API from '../common/api';

export const XHR_ERROR = 'XHR_ERROR';
export const XHR_FAIL = 'XHR_FAIL';
export const MSG_SHOW = 'MSG_SHOW';
export const MSG_HIDE = 'MSG_HIDE';
export const MSG_CLEAR = 'MSG_CLEAR';
export const LOADING_MASK_SHOW = 'LOADING_MASK_SHOW';
export const LOADING_MASK_HIDE = 'LOADING_MASK_HIDE';
export const OTP_COUNT_DOWN = 'OTP_COUNT_DOWN';
export const REMOVE_COUNT_DOWN = 'REMOVE_COUNT_DOWN';
export const XHR_NOLOGIN = 'XHR_NOLOGIN';
export const XHR_INLOGIN = 'XHR_INLOGIN';
export const XHR_SMS_SEND = 'XHR_SMS_SEND';

function xhr(obj, method) {
  const xhrReset = dispatch => {
    setTimeout(() => {
      dispatch({ type: MSG_HIDE });
    }, 2000);
  };

  return dispatch => {
    console.log('**************************请求发起fetch-obj=', obj);
    dispatch({ type: MSG_HIDE });
    if (obj.fetch) {
      dispatch({ type: obj.fetch });
    }
    if (!obj.preventDefaultFetch) {
      dispatch({ type: LOADING_MASK_SHOW });
    }

    console.log('global.url====', global.url);

    return fetch(obj.url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      // credentials: 'same-origin',
      body: obj.data ? JSON.stringify(obj.data) : null,
    }).then(res => res.json())
      .then(json => {
        console.log('**************************请求返回fetch-res=', json);
        // 有响应结果都发dispatch
        if (obj.receive) { dispatch({ type: obj.receive, payload: json }); }

        if (json.respCode === '0000000000') {
          if (obj.successCallback) {
            obj.successCallback(json, dispatch);
          }
        } else if (json.respCode === '0000000001') {  // 未登录
          if (obj.errorCallback) {
            obj.errorCallback(json, dispatch);
          }
          dispatch({ type: XHR_NOLOGIN, payload: json });
        } else { // 其他响应码
          const errorObj = {
            code: json.respCode,
            message: json.respMsg,
            data: json,
          };
          if (obj.error) {
            dispatch({ type: obj.error, payload: errorObj });
          }
          if (obj.errorCallback) {
            obj.errorCallback(json, dispatch);
          }
          if (!obj.preventDefaultError) {
            xhrReset(dispatch);
            dispatch({ type: XHR_ERROR, payload: errorObj });
          }
        }
        if (!obj.preventHideLoadingMask) {
          dispatch({ type: LOADING_MASK_HIDE });
        }
      })
      .catch(ex => {
        if (obj.error) {
          dispatch({ type: obj.fail, payload: ex });
        }
        const errorObj = {
          code: 'XHR_FAIL',
          message: '系统错误，请稍后再试',
          data: ex,
        };
        if (obj.errorCallback) {
          obj.errorCallback(errorObj, dispatch);
        }
        if (!obj.preventDefaultError) {
          xhrReset(dispatch);
          dispatch({ type: XHR_FAIL, payload: ex });
        }
        if (!obj.preventHideLoadingMask) {
          dispatch({ type: LOADING_MASK_HIDE });
        }
      });
  };
}

export function returnUrl(data) {
  const obj = { ...data, url: `${global.url}${data.url}` };
  return obj;
}

export function get(obj) {
  return xhr(returnUrl(obj), 'GET');
}

export function post(obj) {
  return xhr(returnUrl(obj), 'POST');
}

export function showMessage(...args) {
  const text = args[0];
  const duration = typeof args[1] === 'number' ? args[1] : 2000;
  let callback = null;
  if (typeof args[1] === 'function') {
    callback = args[1];
  } else if (typeof args[2] === 'function') {
    callback = args[2];
  }
  return dispatch => {
    dispatch({ type: MSG_SHOW, payload: { message: text } });
    setTimeout(() => {
      dispatch({ type: MSG_HIDE });
      if (callback) { callback(); }
    }, duration);
  };
}

export function hideMessage() {
  return { type: MSG_HIDE };
}

export function showLoadingMask() {
  return { type: LOADING_MASK_SHOW };
}

export function hideLoadingMask() {
  return { type: LOADING_MASK_HIDE };
}

let interval;
export function otpCountDown(duration) {
  clearInterval(interval);
  return dispatch => {
    let countDown = duration || 120;
    interval = setInterval(() => {
      if (countDown > 0) {
        countDown -= 1;
        dispatch({ type: OTP_COUNT_DOWN, payload: { countDown, interval } });
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };
}

export function destroyCountDown(data) {
  clearInterval(data);
  return { type: REMOVE_COUNT_DOWN, payload: { countDown: undefined, interval: undefined } };
}

export function getOtpCode(method, phoneNum, url, postData, callback) {
  const otpUrl = method === 'post' ? url : `${url || API.getOtpCode}/${phoneNum}`;
  if (method === 'post') {
    return post({
      url: otpUrl,
      data: postData,
      receive: XHR_SMS_SEND,
      successCallback: (data, dispatch) => {
        dispatch(otpCountDown());
        if (callback) {
          callback(data);
        }
      },
    });
  }

  return get({
    url: otpUrl,
    successCallback: (data, dispatch) => {
      dispatch(otpCountDown());
    },
  });
}

export function inLogin() {
  return {
    type: XHR_INLOGIN,
  };
}

export function clearInLogin() {
  return { type: XHR_NOLOGIN, payload: { respCode: '', respMsg: '' } };
}
