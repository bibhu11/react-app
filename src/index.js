import React, { Component } from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import ContactsList from './components/ContactList';
import ContactForm from './components/ContactForm';

import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root-reducer';

import { Provider } from 'react-redux';
//dont use in production
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const Home = (prop) => {
	return (
		<div>
			<h3>Welcome to Address Book Application</h3>
		</div>
	);
};

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="container">
						<h2 className="alert alert-info">React Redux Applications</h2>

						<div className="row">
							<div className="col-md-5">
								<ul className="list-group">
									<li className="list-group-item">
										<Link to="/">Home</Link>
									</li>
									<li className="list-group-item">
										<Link to="/add-new-contact">ADD CONTACT</Link>
									</li>
									<li className="list-group-item">
										<Link to="/view-contacts">VIEW CONTACTS</Link>
									</li>
								</ul>
							</div>
							<div className="col-md-7">
								<Route exact path="/" component={Home} />
								<Route exact path="/add-new-contact" component={ContactForm} />
								<Route exact path="/view-contacts" component={ContactsList} />
							</div>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

ReactDom.render(<App />, document.getElementById('root'));
