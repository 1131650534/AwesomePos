<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <!-- 表格 -->
            <el-table :data="tableData" border style="width:100%">
              <!-- 列 -->
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <!-- @click="addOrderList(scope.row)添加当前行 -->
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>

            <div class="totalDiv">
              <small>数量：</small>
              {{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp;
              <small>金额：</small>
              {{totalMoney}}元
            </div>

            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods()">删除</el-button>
              <el-button type="success" @click="checkout()">结账</el-button>
            </div>
          </el-tab-pane>

          <el-tab-pane id="text" label="挂单">挂单</el-tab-pane>

          <el-tab-pane id="text" label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span="17">
        <div class="often-goods">
          <div class="title">热门商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小吃">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮品">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pos",
  data() {
    return {
      tableData: [],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17
        }
      ],
      type0Goods: [
        {
          goodsId: 1,
          goodsImg:
            "https://ws1.sinaimg.cn/large/a15b4afegy1fmvjadkzfmj21hc0u07m6.jpg",
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsImg:
            "https://ws3.sinaimg.cn/large/0072Vf1pgy1foxk7hw45cj31hc0u0nhq.jpg",
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsImg:
            "https://ws4.sinaimg.cn/large/0072Vf1pgy1foxlhgd2lzj31hc0u0dvn.jpg",
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsImg:
            "https://ws4.sinaimg.cn/large/a15b4afegy1fmvjnzrddqj21hc0u0wry.jpg",
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsImg:
            "https://ws2.sinaimg.cn/large/0072Vf1pgy1foxkcn07nlj31hc0u0qis.jpg",
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsImg:
            "https://ws4.sinaimg.cn/large/0072Vf1pgy1foxk6le0yfj31hc0u0e3y.jpg",
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsImg:
            "https://ws1.sinaimg.cn/large/a15b4afegy1fmvjgx5ft0j21hc0u07c4.jpg",
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsImg:
            "https://ws2.sinaimg.cn/large/a15b4afegy1fmvk5mzif3j21hc0u0h45.jpg",
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsImg:
            "https://ws3.sinaimg.cn/large/0072Vf1pgy1foxki70guwj31kw0w0qpu.jpg",
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsImg:
            "https://ws4.sinaimg.cn/large/0072Vf1pgy1foxk79mt63j31hc0u0qlp.jpg",
          goodsName: "香脆鸡柳",
          price: 17
        }
      ],
      totalMoney: 0,
      totalCount: 0
    };
  },
  //元素一创建就开始请求数据
  // created(){
  //   //服务端拉取常用商品数据
  //     axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
  //     .then(response=>{
  //       //  console.log(response);
  //        this.oftenGoods=response.data;
  //     })
  //     .catch(error=>{
  //         console.log(error);
  //         alert('网络错误，不能访问');
  //     })
  //   //拉取分类商品数据：
  //     axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
  //     .then(response=>{
  //        console.log(response);
  //        //this.oftenGoods=response.data;
  //        this.type0Goods=response.data[0];//数组0
  //        this.type1Goods=response.data[1];
  //        this.type2Goods=response.data[2];
  //        this.type3Goods=response.data[3];

  //     })
  //     .catch(error=>{
  //         console.log(error);
  //         alert('网络错误，不能访问');
  //     })
  // },
  //所有Dom加载完成之后
  mounted: function() {
    //获取body高度
    var orderHeiht = document.body.clientHeight;
    //   console.log(orderHeiht)
    //获取id为order-list的元素并且设置样式
    document.getElementById("order-list").style.height = orderHeiht + "px";
  },
  methods: {
    //添加订单列表的方法
    addOrderList(goods) {
      //每次添加  汇总数量及金额清零
      this.totalCount = 0; //汇总数量清0
      this.totalMoney = 0;
      let isHave = false; //判断订单列表是否存在这个商品
      //判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true; //存在
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++; //数量添加
        //console.log(arr);
      } else {
        //不存在就推入数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    //删除单个商品
    delSingleGoods(goods) {
      // console.log(goods);
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    //删除所有商品
    delAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    checkout() {
      //判断有没有商品加入点餐
    if (this.totalCount!=0) {
        this.tableData = [];//清空
        this.totalCount = 0;//清空
        this.totalMoney = 0;//清空
        // this.$message({
        //     message: '结账成功，祝您用餐愉快！请稍等!',
        //     type: 'success'//弹出样式
        // });
        this.$message.success('结账成功，祝您用餐愉快！请稍等!');
 
    }else{
        this.$message.error('对不起，您还没有点餐，不能空结！');
    }
 
},
    //汇总数量和金额
    getAllMoney() {
      //总数量清理
      this.totalCount = 0;
      this.totalMoney = 0;
      //如果this.tableData有值
      if (this.tableData) {
        //进行数量和价格的汇总计算
        this.tableData.forEach(element => {
          //金额=单价*数量
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + element.price * element.count;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pos {
  font-size: 16px;
  .pos-order {
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
  }
  .div-btn {
    margin-top: 10px;
  }
  .title {
    height: 20px;
    border-bottom: 1px solid #d3dec6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
  }
  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    background-color: #fff;
    padding: 10px;
    margin: 10px;
    cursor: pointer; //鼠标变手型
  }
  .o-price {
    color: #58b7ff;
  }
  .goods-type {
    clear: both; //清除浮动
  }
  .cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #e5e9f2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer; //鼠标变手型
  }
  .cookList li span {
    display: block;
    float: left;
  }
  .foodImg {
    width: 40%;
  }
  .foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
  }
  .foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }
  .totalDiv {
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #d3dec6;
  }
}
</style>