import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
    <div>
        <h1>Secret info</h1>
        {props.isAuthenticated && <p>The info is: {props.info}</p>}
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : <h1>Not logged in</h1> }
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="You are authenticated" />, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={true} info="This is some info" />, document.getElementById('app'));
