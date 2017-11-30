import React, { Component } from 'react';
import store from './store'
import { Router,Route,browserHistory,IndexRoute } from 'react-router';
import { Header as CommomWrapper } from '../components/CommonWrapper/';
import { View as Index } from '../pages/index/';
import { View as List } from '../pages/list/';
import { View as Detail } from '../pages/detail/';
import { Provider } from 'react-redux'//引入Provider
import './app.css'


class App extends Component {

    render() {
        return(
        	<Provider store={store}>
	            <div>
	            	<Router history={browserHistory}>
	            		<Route path='/' component={CommomWrapper}>
	            			<IndexRoute component={Index}></IndexRoute>
	            			<Route path='list/:id' component={List}></Route>
	            			<Route path='details/:id' component={Detail}></Route>
	            		</Route>
	            	</Router>
	            </div>
            </Provider>
        )
    }
}

export default App;
