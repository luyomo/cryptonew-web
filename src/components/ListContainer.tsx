import { List, Avatar, Button, Skeleton } from 'antd';
import { connect                        } from "react-redux"
import React                              from "react"
import reqwest                            from 'reqwest'
import * as _                             from "lodash"

// Assets
import BNBLogo                            from '../assets/bnb.png'
import DOGELogo                           from '../assets/doge.jpg'
import BTCLogo                            from '../assets/btc.jpg'
import SOLLogo                            from '../assets/sol.png'
import ETHLogo                            from '../assets/eth.png'
import ADALogo                            from '../assets/ada.png'
import XRPLogo                            from '../assets/xrp.jpg'
import DOTLogo                            from '../assets/dot.png'
import USDCLogo                           from '../assets/usdc.png'

const LOGOContainer = {
    "BNB" : BNBLogo
  , "DOGE": DOGELogo
  , "BTC" : BTCLogo
  , "SOL" : SOLLogo
  , "ETH" : ETHLogo
  , "ADA" : ADALogo
  , "XRP" : XRPLogo
  , "DOT" : DOTLogo
  , "USDC": USDCLogo
}

class ListContainer extends React.Component {
  constructor(props){
    super(props)
    console.log("----- ----- -----")
    console.log(this.props)
    console.log("----- ----- -----")
    this.getData = this.getData.bind(this)
  }

  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(this.props.startId, res => {
      console.log("Coming to fetch the data ")
      console.log(res.results)
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = (_id, callback) => {
    console.log("----- getData----")
    console.log(this.props.url)
    console.log("----- ----- -----")
    reqwest({
      url: this.props.url + "?results=" + this.props.count + "&id=" + _id,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(this.props.count)].map(() => ({ loading: true, name: {} }))),
    });
    var __minID = _.minBy(this.state.data, _entry => {return _entry.id }) 
    console.log("The min id is ", __minID);
    this.getData(__minID['id'], res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={ <Avatar src={item.avatar?LOGOContainer[item.avatar.split(',')[0]]:BTCLogo } /> }
                title={<a href={item.url} target="_blank">{item.title}</a>}
                description={item.description}
              />
              <div>{item.content}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

export default connect()(ListContainer)
