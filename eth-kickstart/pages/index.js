import React, {Component} from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    //Next uses this because something something expensive computationally and if not it has to wait for react to render to get the props
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    render() {
        return(
            <div>{this.props.campaigns[0]}</div>
        )
    }
}

export default CampaignIndex;