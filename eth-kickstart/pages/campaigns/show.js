import React, {Component} from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import {Card, Grid  }from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/contributeForm';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.campaign);
        const summary = await campaign.methods.getSummary().call();

        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {

        const {
            balance,
            manager,
            minimumContribution,
            requestCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta:'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: {overflowWrap: 'break-word'}
            },{
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become a contributor'
            },{
                header: requestCount,
                meta:'Number of requests',
                description: "Requests must be voted on by approvers to be cashed out to recipients"
            },{
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have contributed to this campaign and are approvers'
            },{
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campagin has left'
            }
        ];

        return <Card.Group items={items} />;
    }
    render () {
        return (
            <Layout>
                <h3>CamPaign Show</h3>
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm />
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}

export default CampaignShow;