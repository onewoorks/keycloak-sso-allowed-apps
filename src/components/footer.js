import React from "react"

import { Layout } from "antd"
const { Footer } = Layout

export default class MyFooter extends React.Component {
    render() {
        return <Footer style={ styles.info}>
            <div>Application developed and maintained by <a rel="noopener noreferrer" href="https://onewoorks-solutions.com" target="_blank">onewoorks solutions</a></div>
        </Footer>
    }
}

const styles = {
    info: {
        textAlign:'center',
        fontSize:  13
    }
}
