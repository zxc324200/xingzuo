Page({

  /**
   * 页面的初始数据
   */
  data: {
    con:[],
    warn:[],
    condata:['白羊座','金牛座','双子座',
    '巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
    objectCondata:[
      {
        id:0,
        name:"白羊座"
      },
      {
        id: 1,
        name: "金牛座"
      },
      {
        id: 2,
        name: "双子座"
      },
      {
        id: 3,
        name: "巨蟹座"
      },
      {
        id: 4,
        name: "狮子座"
      },
      {
        id: 5,
        name: "处女座"
      },
      {
        id: 6,
        name: "天秤座"
      },
      {
        id: 7,
        name: "天蝎座"
      },
      {
        id: 8,
        name: "射手座"
      },
      {
        id: 9,
        name: "摩羯座"
      },
      {
        id: 10,
        name: "水瓶座"
      },
      {
        id: 11,
        name: "双鱼座"
      }
    ],
    index:0,
    id:[]
  },
  picker: function (e) {
    var con=this.data.con;
    var condata=this.data.condata;
    var value=e.detail.value;
    var index=this.data.index;
    this.setData({
      con: ""
    });
    if(con==""){
      con.push(condata[value]);
      this.setData({
        index: value,
        con: con
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var con = this.data.con;
    con.splice(0, con.length);
    this.setData({
      con: con
    });  
  },
  onShow:function(){
    var con = this.data.con;
    con.splice(0, con.length);
    this.setData({
      con: con
    });  
  },
  submitClick: function (event) {
    var con = this.data.con;
    var condata = this.data.condata;
    if(con==""){
      con.push(condata[this.data.index]);
      this.setData({
        con: con
      });
      wx.navigateTo({
        url: '/pages/xiangmu/content/content',
      })
    }else{
      wx.navigateTo({
        url: '/pages/xiangmu/content/content',
      })
    }
  }
})
