import { AsyncStorage } from 'react-native';
import constants from '../../assets/constants';
import {DropDownHolder} from './DropDownHolder';

export const XHR_NOLOGIN = 'XHR_NOLOGIN';

export function getLocalStorage(itemName, callback) {
  const promiseObj = AsyncStorage.getItem(itemName);
  promiseObj.then(value => {
    callback(JSON.parse(value));
  });
}

export function setLocalStorage(itemName, dataObj) {
  if (!dataObj) {
    AsyncStorage.removeItem(itemName);
  } else if (typeof dataObj === 'object') {
    AsyncStorage.setItem(itemName, JSON.stringify(dataObj));
  }
}

// 字符串判null
export function isNullText(str) {
  if (!str || str.length === 0 || str === 'null') {
    return '';
  }
  return str;
}

// 保留小数点后两位
export function numberFarmat(str, unit) {
  if (!str || str.length === 0 || str === 'null') {
    return '0.00';
  }
  let tempFloat = parseFloat(str);
  tempFloat *= unit;
  return tempFloat.toFixed(2);
}

// 去掉小数点
export function removePoint(str) {
  if (!str || str.length === 0 || str === 'null') {
    return '';
  }
  if (str.indexOf('.') === -1) {
    return str;
  }
  return str.substring(0, str.indexOf('.'));
}

// 参数说明：routes为路由集合，从state取出，
// 参数说明：routeName为指定返回的路由名称
export function getReturnNavKey(routes, routeName) {
  let indexI = 0;
  let key = null;
  // for (const [index, obj] of routes.entries()) {
  //   if (obj.routeName === routeName) { // 需要返回的指定路由
  //     indexI = index + 1;
  //     if (indexI === routes.length) {
  //       key = null;
  //     } else {
  //       const data = routes[indexI];
  //       key = data.key;
  //     }
  //     break;
  //   }
  // }

  for (let i = 0; i < routes.length; i += 1) {
    const obj = routes[i];
    if (obj.routeName === routeName) { // 需要返回的指定路由
      indexI = i + 1;
      if (indexI === routes.length) { // 判断是否只需要返回执行上级目录
        key = null;
      } else {
        const data = routes[indexI];
        key = data.key;
      }
      break;
    }
  }

  return key;
}


export function request(partUrl, success_fn, method, headers, body) {

  let url = constants.BASE_URL + partUrl;
  let _method = method ? method : 'GET';
  let _body = body ? JSON.stringify(body) : null;

  console.info(url, headers, body);
  fetch(url, {
    method: _method,
    headers: headers,
    body: _body
  })
  .then((response) => response.json())
  .then((responseData) => {   // 获取到的数据处理
    console.info('result', responseData)
    if(responseData.error && responseData.error.code) {
      DropDownHolder.getDropDown().alertWithType('error', 'Error', responseData.error.code + ": " + responseData.error.message);
    }else {
      success_fn(responseData);
    }
  })
  .catch((error) => {
    console.log('==> fetch error', error);
    DropDownHolder.getDropDown().alertWithType('error', 'Error', error);
  })
  .done();
}
