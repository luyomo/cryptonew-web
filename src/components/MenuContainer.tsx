import type { MenuDataItem } from '@ant-design/pro-layout'
import ProLayout, { PageContainer } from '@ant-design/pro-layout'
import { Input } from 'antd'
import React, { useEffect, useState  } from "react"
import { connect  } from "react-redux"
import styled from "styled-components"

import menu from './data/menu'
import TabsContainer from './TabsContainer'

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
    console.log(this.props.name)
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
          menuProps={{ onSelect: this.onClickMenu }}
        >
          <TabsContainer />
        </ProLayout>
      </div>
    )
  } 
}

const mapStateToProps    = ( () => {})
const mapDispatchToProps = ( () => {})
 
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)
