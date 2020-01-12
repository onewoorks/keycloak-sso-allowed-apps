import React from "react"
import { Card } from "antd"

export default class AppsBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apps_name: this.props.apps_data.name,
            apps_url: this.props.apps_data.url
        }
    }
    render() {
        return (
            <a href={this.state.apps_url}>
                <Card
                    style={{ textAlign: "center", height: 130 }}
                    bordered
                    hoverable
                >
                    <p>{this.state.apps_name}</p>
                </Card>
            </a>
        )
    }
}
