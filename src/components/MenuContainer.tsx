import type { MenuDataItem }           from '@ant-design/pro-layout'
import ProLayout, { PageContainer }    from '@ant-design/pro-layout'
import { Input }                       from 'antd'
import React, { useEffect, useState  } from "react"
import { bindActionCreators  }         from 'redux'
import { connect  }                    from "react-redux"
import styled                          from "styled-components"

// Local library
import menu                            from './data/menu'
import TabsContainer                   from './TabsContainer'
import ListContainer                   from './ListContainer'
import GoogleOAuth2                    from './GoogleOAuth2'
import { TabsActionTypes }             from "../types/constants"

// Assets
import logo                            from '../assets/btc.png'

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
    console.log(dispatch)

    //let action = TodoActionCreators.addTodo('Use Redux')
    //dispatch(action)
  }

  onClickMenu (_event) {
    console.log("Clicked on the event")
    console.log(this.props.test)
    this.props.test01()
    console.log(_event)
    console.log(this.props);
  }
  render() {
    return (
      <div style={{ height: '100vh', }} >
        <ProLayout location={{ pathname: '/home/overview', }}
          menuExtraRender={({ collapsed }) =>
            !collapsed && (
              <Input.Search
                onSearch={(e) => {
                  setKeyWord(e)
                }}
              />
            )
          }
          menuDataRender={() => menu}
          logo={logo}
          title="加密货币实时新闻"
          rightContentRender={() => (
              <div >
            <GoogleOAuth2 clientID="162023813570-ir8c6j1hvrinc70qb5c8sv4mlkltgd28.apps.googleusercontent.com" />
          </div>
          )}
          menuFooterRender={(props) => {
            return (
              <GoogleOAuth2 clientID="162023813570-ir8c6j1hvrinc70qb5c8sv4mlkltgd28.apps.googleusercontent.com" />
          );
          }}
          menuProps={{ onSelect: this.onClickMenu }}
        >
          <ListContainer />
        </ProLayout>
      </div>
    )
  } 
}
          //<TabsContainer />

function mapStateToProps (state) {
  return {
      tabsReducer: state.tabsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    test: (_value) => {dispatch({type: "test_value", payload: _value})},
    test01: bindActionCreators((_value) => {return {type: "test_value", payload: _value}}, dispatch) 
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)
//export default connect(mapStateToProps)(MenuContainer)
