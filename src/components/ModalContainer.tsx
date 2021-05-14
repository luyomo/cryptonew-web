import React from 'react';
import { Button, message, Space } from 'antd';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { connect                      } from "react-redux"
import { bindActionCreators           } from 'redux'

import { ACTION_MODAL_KEY       } from '../actions/modalKey'
import { bianBase  } from '../javascripts/bianapi/bianapi'
import { BINANCE_API_SERVER  }        from '../types/constants'
 
class ModalContainer extends React.Component {
  render () {
    return (
      <Space>
        <ModalForm
          title="新建表单"
          trigger={<Button type="primary">密钥输入</Button>}
          submitter={{
            render: (props, defaultDoms) => {
              return [
                ...defaultDoms,
                <Button
                  key="ok"
                  onClick={() => {
                    props.submit();
                  }}
                >
                  ok
                </Button>,
              ];
            },
          }}
          onFinish={async (values) => {
            let _insBianApi = new bianBase(values.apiKey, values.apiSecretKey);
            let __keyChk = _insBianApi.postHmacRequest( "https://api.binance.com/api/v3/order/test", {"symbol":"BNBUSDT", "side": "BUY", "type": "MARKET", "quantity" : "1"})
            console.log(__keyChk)
            if(__keyChk.statusCode === 200){
              message.success('提交成功');
              this.props.ACTION_MODAL_KEY(values.apiKey, values.apiSecretKey)
              return true
            }else{
              message.error(__keyChk.body);
              return false
            }
          }}
        >
          <ProFormText width="md" name="apiKey" label="API KEY" placeholder="zd8FhdpuqD72Gjdfoyjqlsh70UnkjIkl2dFastF8dxx65Fjks9dUanvFnvv87Hga" />
          <ProFormText width="md" name="apiSecretKey" label="密钥" placeholder="fgfj87Fghjkl36Ghklj7JhkshquJkfYhfg94Hjdksj95Fjks9dUanvFnvv87Hga" />
        </ModalForm>
      </Space>
    );
  }
}

function mapStateToProps (state) {
  return {
      modalReducer: state.modalReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({ ACTION_MODAL_KEY }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
