import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getHeader } from './actionCreator';
import axios from 'axios';
import style from './style.mcss'

class Header extends Component {
	render(){
		return(
			<div>
				<div className={style['Header-Top_container']}>
					<div className={style['Header_Top']}>
						<p className={style['Header_Top_Tip']}><Link to='' className={style['Header_Top_Tip_link']} href='#'>网站手机版</Link><Link to='' className={style['Header_Top_Tip_link']} href='#'>学英语请加微信号：easyvoa2104</Link></p>
						<div className={style['Header_Top_search']}>
							<input type='text' className={style['Header_Top_searchInput']} />
							<input type='button' className={style['Header_Top_searchBtn']} value='搜索' />
						</div>
					</div>
				</div>
				<div className={style["Header_main"]}>
					<Link to='/'>
						<img className={style['Header_logo']} src={require('../../static/image/logo.png')} title='logo' alt='VOA' />
					</Link>
					<ul	className={style['Header_title']}>
						{
							this.props.data.title.map( (item) =>{
								return <li className={style['Header_title_item']} key={item.id}><Link to={item.url}>{item.content}</Link></li>
							} )
						}
					</ul>
				</div>
				<div className={style['Header_Nav_container']}>
					{
						this.props.data.nav.map( (item) =>{
							return (
								<div className={style['Header_Nav']} key={item.id}>
									<h2 className={style["Header_Nav_title"]}><Link to={item.url}>{item.title}</Link></h2>
									<ul>
										{
											item.list.map( (item) =>{
												return <li className={style['Header_Nav_item']} key={item.id}><Link to={item.url}>{item.content}</Link></li>
											} )
										}
									</ul>
								</div>
							)
						} )
					}
				</div>
				<div className={style['Header_hotTag_container']}>
					<h4 className={style['Header_hotTag_title']}>热门标签:</h4>
				</div>
				<div>
					{ this.props.children }
				</div>
				<div className={style['footer']}>
					<p className={style['footer_content']}>本网站由<Link to='' className={style['footer_importent']}>EasyVOA</Link>开发上线 © 2011-2014<Link to='' className={style['footer_phone']}>手机版EasyVOA</Link></p>
					<p className={style['footer_content']}>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
					<p className={style['footer_content']}><Link to=''><img src={require('../../static/image/icon_9.gif')} alt='icon' /></Link></p>
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.getHeaderInfo();
	}

	getHeaderInfo() {
		axios.get( '/api/header.json' )
			.then( this.props.handleGetInfoSucc.bind(this) )
	}
}

const mapStateToProps = (state) =>({
	data:state.header.data
})

const mapDispatchToProps = ( dispatch ) =>({
	handleGetInfoSucc:(response) =>{
		const {data} = response.data;
		dispatch( getHeader( data ) );
	}
})

export default connect( mapStateToProps,mapDispatchToProps )(Header)
