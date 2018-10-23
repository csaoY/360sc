import urls from '../../utils/urls'
import post from '../../utils/request'
　const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (options) {
    console.log(options);
    //this.getLog(options.orderno)
    this.getLog('P2018091700076')

  },
  getLog(orderNo){
    const that=this;
    const obj=new Object();
    obj.orderNo = orderNo;
    post(urls.logistics,obj).then(res=>{
      console.log(res)
      let list = res.result || [];
      for (var i = 0; i < list.length; i++) {
        list[i].time = list[i].time.split(" ")
      }
      console.log(list)
      this.setData({
        list,
        err: false,
        loaded: true
      })
      
    })


  }

})