import type { MenuDataItem           } from '@ant-design/pro-layout'
import ProLayout, { PageContainer    } from '@ant-design/pro-layout'
import { Input                       } from 'antd'
import React, { useEffect, useState  } from "react"
import { bindActionCreators          } from 'redux'
import { connect                     } from "react-redux"
import styled                          from "styled-components"

// Local library
import menu                            from './data/menu'
import TabsContainer                   from './TabsContainer'
import ListContainer                   from './ListContainer'
import TableContainer                  from './TableContainer'
import GoogleOAuth2                    from './GoogleOAuth2'
//import { TabsActionTypes             } from "../types/constants"
import { ACTION_MENU_SWITCH          } from '../actions/menu'

// Assets
import logo                            from '../assets/btcLogo.png'
import userLogo                        from '../assets/user.jpg'

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch  } = props
    this.onClickMenu = this.onClickMenu.bind(this);
  }

  componentDidMount() {
    let { dispatch } = this.props
    console.log(this.props)

  }

  onClickMenu (_event) {
    console.log("---- 001.   Clicked on the event")
    console.log(this.props)
    //this.props.test01()
    console.log(_event.key)
    this.props.ACTION_MENU_SWITCH(_event.key)
    console.log(this.props)
  }
  render() {
    let container
    if (this.props.menuReducer.type === "ListContainer") {
      container = <ListContainer count={ this.props.menuReducer.count  } startId={ this.props.menuReducer.startId  } url={ this.props.menuReducer.url   } /> 
    }else if(this.props.menuReducer.type === "TableContainer"){
      container = <TableContainer />
    }

    return (
      <div style={{ height: '100vh', }} >
        <ProLayout location={{ pathname: '/home/overview', }}
          menuDataRender={() => menu}
          logo={logo}
          title="加密货币实时新闻"
          rightContentRender={() => (
              <div>{this.props.googleReducer.ft.Ue},欢迎来到加密货币实时新闻网 <img src={ this.props.googleReducer.ft.iJ } width="40" height="45" /></div>
          )}
          menuFooterRender={(props) => {
            return (
              <GoogleOAuth2 clientID="162023813570-ir8c6j1hvrinc70qb5c8sv4mlkltgd28.apps.googleusercontent.com" />
          );
          }}
          menuProps={{ onSelect: this.onClickMenu }}
        >

          {container}
        </ProLayout>
      </div>
    )
  } 
}
          //<TabsContainer />
          //<ListContainer count="5" url= "/cryptonews-api/cryptonews" />
          //<ListContainer count={ this.props.menuReducer.count } startId={ this.props.menuReducer.startId } url={ this.props.menuReducer.url  } />

function mapStateToProps (state) {
  return {
      menuReducer  : state.menuReducer,
      googleReducer: state.googleReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({ ACTION_MENU_SWITCH }, dispatch);
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)
//export default connect(mapStateToProps)(MenuContainer)
