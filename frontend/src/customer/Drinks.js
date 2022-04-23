import React, {Component} from 'react';
import Menu from './component/Menu_Drinks';

export class Drinks extends Component {
    render() {
        return(
            <div>
                <Menu name="Đồ uống" desc="Many drinks for you to choose"/>
            </div>
        )
    }
}