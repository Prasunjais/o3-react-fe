import React, { Component, Fragment } from 'react'
import BankTable from './BankTable';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  searchBank
} from '../services/bank'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default class BankSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'bombay',
      search: '',
      spinning: false,
      banks: []
    }
  }

  async componentDidMount() {
    this.setState({ city: 'bombay', spinning: true });
    let data = await searchBank('bombay');
    if (data.success)
      this.setState({ banks: data.data.data, spinning: false });
    else {
      this.setState({ spinning: false });
      message.error('API ' + data.error)
    }
  }

  handleMenuClick = async (e) => {
    this.setState({ spinning: true });
    let data = await searchBank(e.key);
    if (data.success)
      this.setState({ city: e.key, banks: data.data.data, spinning: false });
    else {
      this.setState({ spinning: false });
      message.error('API ' + data.error)
    }
  }

  // change edit 
  changeInput = ((e) => {
    this.setState({ search: e.target.value });
  })

  render() {
    const { banks, city, search, spinning } = this.state;
    return (
      <Fragment>
        <Spin indicator={antIcon} spinning={spinning}>
          <div className="row my-5 mx-2">
            <h1>Bank Directory</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Dropdown overlay={<Menu onClick={this.handleMenuClick}>
                <Menu.Item key="Bombay" icon={<UserOutlined />}>
                  Bombay
              </Menu.Item>
                <Menu.Item key="bangalore" icon={<UserOutlined />}>
                  Bangalore
              </Menu.Item>
                <Menu.Item key="Pune" icon={<UserOutlined />}>
                  Pune
            </Menu.Item>
              </Menu>}>
                <Button>
                  {city} <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div className="col-md-8">
              <input type="text"
                class="form-control"
                value={search}
                placeholder='Enter Bank Name'
                onChange={(e) => this.changeInput(e)}
                id="bankSearch" />
            </div>
          </div>
          <div className="row">
            <BankTable banks={banks} search={search} />
          </div>
        </Spin>
      </Fragment>
    )
  }
}
