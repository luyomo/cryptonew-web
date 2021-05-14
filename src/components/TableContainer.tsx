import React                                                        from 'react';
import { connect                                                  } from "react-redux"
import { bindActionCreators                                       } from 'redux'
import { Button, Tooltip, Dropdown, Menu, Input                   } from 'antd';
import { EllipsisOutlined, QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';
import type { ProColumns                                          } from '@ant-design/pro-table';
import ProTable, { TableDropdown                                  } from '@ant-design/pro-table';

//import { requestBianapi } from '../javascripts/bianapi'
import { bianBase } from '../javascripts/bianapi/bianapi'
import { userInfo } from '../javascripts/bianapi/userInfo'
import ModalContainer from './ModalContainer'
import { ACTION_BIAN_USER_BALANCES } from '../actions/bianactions'
  //return bindActionCreators ({ ACTION_BIAN_USER_BALANCES }, dispatch);

let _insBianApi = new bianBase("test01", "test02")

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    asset: 'AppName',
    free: 100,
    locked: 0
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '排序',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '虚拟货币名称',
    dataIndex: 'asset',
  },
  {
    title: '拥有货币量',
    dataIndex: 'free'
  },
  {
    title: '锁住货币量',
    dataIndex: 'locked',
  },
  {
    title: '单价(USDT/BUSD)',
    dataIndex: 'unitPrice',
  },
  {
    title: '总价(USDT/BUSD)',
    dataIndex: 'amount',
  },
];

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.ACTION_BIAN_USER_BALANCES(this.props.modalReducer.insUserInfo);
  }

  render () {
    //console.log(this.props.modalReducer)
    //console.log(this.props.bianReducer)
    console.log("000000000000000000000000000000000000000000")
    //console.log(typeof(tableListDataSource))
    console.log(typeof(this.props.bianReducer.balances))
    return (
      <ProTable<TableListItem>
        columns={columns}
        dataSource={this.props.bianReducer.balances}
        //request={(params, sorter, filter) => {
        //  // 表单搜索项会从 params 传入，传递给后端接口。
        //  //console.log(params, sorter, filter);
        //  //console.log("------------------------ ------------------------")
        //  //if (this.props.modalReducer === undefined || this.props.modalReducer.insUserInfo == undefined) return []
        //  //let __test = this.props.modalReducer.insUserInfo.fetchAccountInfo()
        //  //console.log("------------------------")
        //  //console.log(__test)
        //  //return __test
        //  //return //Promise.resolve({
        //  //  //data: this.props.bianReducer.balances,
        //  //  //data: tableListDataSource,
        //  //  {
        //  //  data: this.props.bianReducer.balances,
        //  //  success: true,
        //  //  }
        //  ////});
        //  console.log(this.props.bianReducer.balances)
        //  return {data: this.props.bianReducer.balances }
        //}}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
        }}
        search={{
          layout: 'vertical',
          defaultCollapsed: false,
        }}
        dateFormatter="string"
        toolbar={{
          title: '高级表格',
          tooltip: '这是一个标题提示',
        }}
        toolBarRender={() => [
          <ModalContainer />,
          <Button type="primary" key="primary" onClick={() => {  this.props.ACTION_BIAN_USER_BALANCES(this.props.modalReducer.insUserInfo);  }}>查看日志</Button>,
        ]}
      />
    )
  }
}
          //<Button type="primary" key="primary" onClick={() => {  _insBianApi.sendPublicRequest(this.props.modalReducer.apiKey, this.props.modalReducer.apiSecretKey)  }}>查看日志</Button>,
        //<Button key="show" onClick={_insBianApi.sendPublicRequest("test", 'testKey')}>查看日志</Button>,
        //<Button key="show" onClick={() => { requestBianapi()}}>查看日志</Button>,
function mapStateToProps (state) {
  return {
    modalReducer: state.modalReducer,
    bianReducer: state.bianReducer
  };
}
 
function mapDispatchToProps(dispatch) {
  return bindActionCreators ({ ACTION_BIAN_USER_BALANCES }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)
