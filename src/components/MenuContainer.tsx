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
import GoogleOAuth2                    from './GoogleOAuth2'
import { TabsActionTypes             } from "../types/constants"
import { ACTION_MENU_SWITCH          } from '../actions/menu'

// Assets
import logo                            from '../assets/btcLogo.png'
import userLogo                        from '../assets/user.jpg'

const filterByMenuDate = (data: MenuDataItem[], keyWord: string): MenuDataItem[] =>
  data
    .map((item) => {
      if (
        (item.name && item.name.includes(keyWord)) ||
        filterByMenuDate(item.children || [], keyWord).length > 0
      ) {
        return {
          ...item,
          children: filterByMenuDate(item.children || [], keyWord),
        }
      }
      return undefined
    })
    .filter((item) => item) as MenuDataItem[]

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("Printing the data ---------- ");
    console.log(this.props);
    const { dispatch  } = props
    console.log("The dispatch function here ")
    console.log(dispatch)
    this.onClickMenu = this.onClickMenu.bind(this);
  }

  componentDidMount() {
    let { dispatch } = this.props
    console.log("Printing in the componentdidmount")
    console.log(this.props)

    //let action = TodoActionCreators.addTodo('Use Redux')
    //dispatch(action)
  }

  onClickMenu (_event) {
    console.log("---- 001.   Clicked on the event")
    console.log(this.props)
    //this.props.test01()
    console.log(_event.key)
    this.props.ACTION_MENU_SWITCH(_event.key)
    console.log(this.props)
    //console.log(this.props.googleReducer.ft.Qt);
    //console.log(this.props.googleReducer.ft);
  }
  render() {
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
          <ListContainer count={ this.props.menuReducer.count } startId={ this.props.menuReducer.startId } url={ this.props.menuReducer.url  } />
        </ProLayout>
      </div>
    )
  } 
}
          //<TabsContainer />
          //<ListContainer count="5" url= "/cryptonews-api/cryptonews" />

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
