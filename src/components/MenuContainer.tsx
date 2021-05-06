import type { MenuDataItem } from '@ant-design/pro-layout'
import ProLayout, { PageContainer } from '@ant-design/pro-layout'
import { Input, Avatar } from 'antd'
import React, { useEffect, useState  } from "react"
import { connect  } from "react-redux"
import styled from "styled-components"
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import GoogleOAuth2 from './GoogleOAuth2'

import menu from './data/menu'
import TabsContainer from './TabsContainer'

import logo from '../assets/btc.png'

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
    super(props)
  }

  onClickMenu (_event) {
    console.log("Clicked on the event")
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
          <TabsContainer />
        </ProLayout>
      </div>
    )
  } 
}

//const mapStateToProps    = ( () => () => {} )
function mapStateToProps (state) {
  return {
      ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)
