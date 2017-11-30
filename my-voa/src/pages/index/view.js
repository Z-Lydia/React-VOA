import React,{ Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { getIndex } from './actionCreator';
import Clock from './Components/Clock/view';
import Ad from './Components/Swiper/view';
import axios from 'axios';
import style from './style.mcss';

class Index extends Component{
	render() {
		return(
			<div className={style['Index_container']}>
				<div className={style['Index_list_container']}>
					<h1 className={style['Index_title']}>VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。</h1>
					<ul className={style['Index_list']}>
						<li className={style['Index_list_item']}>
							<span className={style['Index_list_item_title']}><Link to="/nuanwan" className={style['Index_list_item_first']}>[暖湾]</Link></span>
							<span className="Index_list_item_content"><Link to="/nuanwan" className={style['Index_list_item_firstContent']}>宠物鱼品牌推广~</Link></span>
						</li>
						<li className={style['Index_list_item']}>
							<span className={style['Index_list_item_title']}><Link to="/skyEnglish" className={style['Index_list_item_second']}>[空中英语教室]</Link></span>
							<span className={style["Index_list_item_content"]}><Link to="/skyEnglish" className={style['Index_list_item_secondContent']}>本年度亚洲最佳英文教学奖：《空中英语教室》系列杂志</Link></span>
						</li>
						{
							this.props.content.map( ( item )=>{
								return (
									<li className={style['Index_list_item']} key={item.id}>
										<span className={style['Index_list_item_title']}><Link to={item.titleUrl}>[{item.title}]</Link></span>
										<span className={style["Index_list_item_content"]}><Link to={item.url}>{ item.content }<span className={style['Index_list_item_time']}>({item.time})</span></Link></span>
									</li>
								)
							} )
						}
					</ul>
					<Clock />
					<Ad />
				</div>
				<div className={style['friend_link']}>
					<h4 className={style['friend_link_title']}>VOA友情链接</h4>
					<ul>
						{
							this.props.friendLink.map( (item) => {
								return (
									<li className={style['friend_link_item']} key={item.id}>
										<Link to={item.url}>{item.content}</Link>
									</li>
								)
							} )
						}
					</ul>
				</div>
				<img className={style['weixin']} src={require('../../static/image/weixin.jpg')} title='VOA微信' alt='VOA微信' />
			</div>
		)
	}
	componentDidMount() {
		this.getIndexDataInfo();
	}

	getIndexDataInfo() {
		axios.get( '/api/index.json' )
			.then( this.props.handleGetDateSucc.bind( this ) )
	}
}

const mapStateToProps = ( state ) =>({
	content:state.index.data.content,
	friendLink:state.index.data.friendLink
})

const mapDispatchToProps = ( dispatch ) =>({
	handleGetDateSucc:( response ) =>{
		const { data } = response.data;
		dispatch( getIndex( data ) );
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Index)
