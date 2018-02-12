import React, { Component } from 'react';
import {Form,Button,Message,Input} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link,Router} from '../../../routes';

class RequestNew extends Component {

    state={
        value: '',
        description: '',
        recipient: ''
    }

    static async getInitialProps(props){
        const {address} = props.query;
        return{address}
    }

    render() {
        return(
            <Form>
                <Form.Field>
                    <label></label>
                    <Input />
                </Form.Field>

                <Form.Field>
                    <label></label>
                    <Input />
                </Form.Field>

                <Form.Field>
                    <label></label>
                    <Input />
                </Form.Field>
            </Form>
        )
    }
}

export default RequestNew;