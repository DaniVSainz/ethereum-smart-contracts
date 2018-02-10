import React, {Component} from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.campaign);
        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        return {};
    }
    render () {
        return (
            <Layout>
                <h3>CamPaign Show</h3>
            </Layout>
        )
    }
}

export default CampaignShow;