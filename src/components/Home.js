import React, {Component} from 'react';
import LayoutWrapper from 'admin-lte-react/LayoutWrapper';

import PageWrapper from 'admin-lte-react/PageWrapper';
import PageHeader from 'admin-lte-react/PageHeader';
import Breadcrumb from 'admin-lte-react/Breadcrumb';
import PageContent from 'admin-lte-react/PageContent';
import Box from 'admin-lte-react/Box';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Controlbar from './layout/Controlbar';

export default class Home extends Component{
    render(){
        return (
            <LayoutWrapper color="blue">
                <Header />
                <Sidebar />
                <PageWrapper>
                    <PageHeader title="Network Monitor">
                        <PageContent>
                            <div className="row">
                                <div className="col-xs-12">
                                    <Box
                                        title="Network Monitor"
                                        status="primary"
                                        expandable
                                        removable
                                    >

                                    </Box>
                                </div>
                            </div>
                        </PageContent>
                    </PageHeader>
                </PageWrapper>
                <Footer />
                <Controlbar />
            </LayoutWrapper>

        );
    }
}
