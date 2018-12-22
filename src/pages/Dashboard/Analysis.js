import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';

import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { getTimeDistance } from '@/utils/utils';

import styles from './Analysis.less';
import PageLoading from '@/components/PageLoading';
import Filter from "../../components/Filter/Filter";
import MapHolder from "../../components/Map/MapHolder";

@connect((namespaces) => ({
  refinaries :  namespaces.refinaries,
  loading:      namespaces.loading.effects['chart/fetch'],
}))
class Analysis extends Component {
  state = {
  };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'refinaries/fetch',
    });

  }


  render() {
    const {  } = this.state;
    const {  refinaries, loading} = this.props;

    return (
      <GridContent>

        <Filter/>
        <Suspense loading={loading} fallback={<PageLoading />}>
          <MapHolder refinaries={refinaries.list} />
        </Suspense>

      </GridContent>
    );
  }
}

export default Analysis;
