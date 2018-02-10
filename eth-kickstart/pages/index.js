import React, {Component} from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/layout';
import {Link} from '../routes'

class CampaignIndex extends Component {
    //Next uses this because something something expensive computationally and if not it has to wait for react to render to get the props
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    renderCampaigns() {
        // console.log(campaigns);
        const items = this.props.campaigns.map( campaign => {
            return {
                header: campaign,
                description: (
                    <Link route={`/campaigns/${campaign}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            }
        });

        return <Card.Group items={items} /> ;
    }

    render() {
        return(
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        <a>
                            <Button
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        )
    }
}

export default CampaignIndex;