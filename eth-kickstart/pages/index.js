import React, {Component} from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';

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
                description: <a>View Campaign</a>,
                fluid: true
            }
        });

        return <Card.Group items={items} /> ;
    }

    render() {
        return(
            <div>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <h3>Open Campaigns</h3>
                {this.renderCampaigns()}
                <Button
                content="Create Campaign"
                icon="add circle"
                primary
                />
            </div>
        )
    }
}

export default CampaignIndex;