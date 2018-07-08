import * as React from 'react';
import { NavMenu } from './NavMenu';
import { NavBar } from './NavBar';
import { NavFooter } from './NavFooter';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div>
                    <div>
                        <NavBar />
                    </div>
                </div>
                {location.pathname === '/' 
                    ? (<div className='center-div'>
                        {this.props.children}
                    </div>)
                    : (<div className='center-clean-div'>
                        {this.props.children}
                    </div>)
                }
            </div>
        </div>;
    }
}
