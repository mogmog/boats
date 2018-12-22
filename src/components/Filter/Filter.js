import React, { PureComponent } from 'react';
import { Select, message, Drawer, List, Switch, Divider, Icon, Button, Alert, Tooltip, Avatar } from 'antd';
import { formatMessage } from 'umi/locale';
import { connect } from 'dva';

import styles from './Filter.less';

const { Option } = Select;

@connect(({ setting }) => ({ setting }))
export default class Filter extends PureComponent {

  state = {
    collapse: false,
  };

  componentDidMount() {
  }

  togglerContent = () => {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  };

  render() {
    const {  } = this.props;
    const { collapse } = this.state;

    return (
      <Drawer
        visible={collapse}
        width={'30%'}
        closable={false}
        onClose={this.togglerContent}
        placement="left"
        handler={
          <div className={styles.handle}>
            <Icon
              type={collapse ? 'close' : 'filter'}
              style={{
                color: '#fff',
                fontSize: 20,
              }}
            />
          </div>
        }
        onHandleClick={this.togglerContent}
        style={{
          zIndex: 999,
          padding : '0px'
        }}
      >


        <List
          itemLayout="horizontal"
          dataSource={[1,2,3]}
          renderItem={item => (
            <List.Item>
              Item
            </List.Item>
          )}
        />

      </Drawer>
    );
  }
}
