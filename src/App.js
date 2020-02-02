import React from "react"
import Keycloak from "keycloak-js"
import "./App.css"

import { Layout, Row, Col } from "antd"
import AppsBox from "./components/apps_box"
import MyFooter from "./components/footer"
import apps_info from './data/apps_list';

const { Header, Content } = Layout

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keycloak: null,
            authenticated: false,
            apps: null
        }
    }

    list_of_allow_apps = () => {
        let apps = this.state.apps
        let apps_list = []
        for(let app in apps){
                let output = <Col key={app} xs={24} sm={12} md={12} lg={6} >
                <AppsBox apps_data={apps[app]} app_name={app} />
                </Col>
                apps_list.push(output)
        }
        return apps_list
    }

    componentDidMount() {
        const keycloak = Keycloak("/keycloak.json")
        keycloak
            .init({ onLoad: "login-required", promiseType: "native" })
            .then(authenticated => {
                this.setState({
                    keycloak: keycloak,
                    authenticated: authenticated,
                    apps: keycloak.resourceAccess
                })
                console.log(keycloak)
            })
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated)
            
                return (
                    <Layout style={{ height: "100vh" }}>
                        <Header style={{color:'white'}}>AKSES KAWALAN APLIKASI | <strong>{this.state.keycloak.realm}</strong></Header>                      
                        <Content style={{ padding:46 }}>
                          <h2>Selamat datang, {this.state.keycloak.idTokenParsed.name}</h2>
                          <h3>Berikut adalah applikasi yang boleh diakses menggunakan akaun anda.</h3>
                        <div style={{marginTop:20}}>
                            <Row type="flex" align="middle" gutter={[12,12]}>{this.list_of_allow_apps()}</Row>
                            </div>
                        </Content>
                        <MyFooter />
                    </Layout>
                )
            else return <div>Unable to authenticate!</div>
        }
        return <div>Initializing Keycloak...</div>
    }
}

