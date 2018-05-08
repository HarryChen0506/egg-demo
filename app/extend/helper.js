// 扩展

const moment = require('moment');
moment.locale('zh-cn');

exports.relativeTime = time => {    
  return  moment(new Date(time)).fromNow() 
};

exports.formatTime = time =>{
  return moment(new Date(time)).format('MMMM Do YYYY, h:mm:ss a');
}
/**
 * 格式化用户信息，只返回name phone
 */
exports.formatUser = (user, filterKeys=[])=> {
  let result = {};
  const defaultKeys = ['name','phone','age'];
  filterKeys = [...filterKeys, ...defaultKeys];
  filterKeys.forEach(key=>{
    result[key] = user[key]
  })
  return result;
}