// 扩展

const moment = require('moment');
moment.locale('zh-cn');
exports.relativeTime = time => {    
   return  moment(new Date(time)).fromNow() 
};
exports.formatTime = time =>{
  return moment(new Date(time)).format('MMMM Do YYYY, h:mm:ss a');
}
