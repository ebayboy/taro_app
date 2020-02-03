import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import "./index.scss";

import Constellation from "../../component/constellation";
import bg from "../../public/bg.jpeg";

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  constructor() {
    super(...arguments);
  }

  config: Config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  //render -- 渲染
  render() {
    return (
      <View>
        <Image src={bg} />
        <View>
          <View>今日星座运势</View>
          <Constellation></Constellation>
        </View>
      </View>
    );
  }
}
