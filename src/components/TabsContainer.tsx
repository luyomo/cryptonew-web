import { Tabs } from 'antd'
import React, { useEffect, useState } from "react"
import { connect   } from "react-redux"
import styled from "styled-components"

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

class TabsContainer extends React.Component{
    render(){
        return (
          <Tabs onChange={callback} type="card">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        )
    }
}

const mapStateToProps    = ( () => {} )
const mapDispatchToProps = ( () => {} )
 
export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer)
