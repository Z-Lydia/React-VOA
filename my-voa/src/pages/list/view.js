import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getList } from './actionCreator';
import axios from 'axios';
import style from './style.mcss'

class List extends Component {
	//当URL发生改变时，实际上页面并没有重新渲染，所以在componentDidMount中不会重发请求，但是父组件实际上能感知此变化，并新执行render，所以在此函数中再次请求数据
	componentWillReceiveProps( nextProps ) {
		if( nextProps.params.id !== this.props.params.id ){
			this.getListInfo( nextProps.params.id )
		}
	}

	render() {
		return(
			<div className={style['listPage_container']}>
				<div className={style['listPage_Top']}>
					<img src={require( '../../static/image/studio_logo.png' )} title='studio_logo' alt='studio_logo' />
					<img className={style['listPage_Top_img_ad']} src={require( '../../static/image/studio_ad.gif' )} title='studio_ad' alt='studio_ad' />
				</div>
				<div className={style['listPage_nav']}>
					<ul className={style["listPage_nav_bar"]}>
						<li className={style['listPage_nav_item']}>
							<Link to='/list/1' className={style['listPage_nav_item_a']}>大家说英语</Link>
						</li>
						<li className={style['listPage_nav_item']}>
							<Link to='/list/2' className={style['listPage_nav_item_a']}>空中英语教室</Link>
						</li>
						<li className={style['listPage_nav_item']}>
							<Link to='/list/3' className={style['listPage_nav_item_a']}>彭蒙惠英语</Link>
						</li>
					</ul>
				</div>
				<div className={style['listPage_content']}>
					<div className={style['listPage_content_left']}>
						{
							this.props.data.titlePic.map( (item) =>{
								return(
									<img key={item.id} className={style['listPage_content_titleImg']} src={item.img} title='大家说英语' alt='大家说英语' />
								)
							} )
						}
						{
							this.props.data.leftPic.map( (item) =>{
								return(
									<img key={item.id} className={style['listPage_content_LeftImg']} src={item.img} title='大家说英语' alt='大家说英语' />
								)
							} )
						}
						<h2 className={style['listPage_content_previous']}>往期试听：</h2>
						<ul className={style['listPage_content_list']}>
							{
								this.props.data.previous.map( (item) => {
									return (
										<li className={style['listPage_content_listItem']} key={item.id}>
											<Link to={item.url} className={style['listPage_content_listItem_a']}>{item.content}<span className={style['listPage_content_listItem_tip']}>{item.tip}</span></Link>
										</li>
									)
								} )
							}
						</ul>
					</div>
					<div className={style['listPage_content_right']}>
						<h2 className={style['listPage_content_right_title']}>杂志展示：</h2>
						{
							this.props.data.magPic.map( (item) =>{
								return(
									<img key={item.id} className={style['listPage_content_right_magazine']} src={item.img} title='英语杂志' alt='英语杂志' />
								)
							} )
						}
						<h2 className={style['listPage_content_right_title']}>视频展示：</h2>
						<div className={style['listPage_video_container']}>
							<video controls preload='true' muted className={style['listPage_video']} src={require('../../static/video/video.mp4')} ></video>
						</div>
						<p className={style['listPage_p']}>《大家说英语》（Let's Talk in English）为“空中英语教室”系列的“初级版杂志”,多年获得“亚洲最佳英语教学奖”</p>
						<p className={style['listPage_p']}>杂志每月一刊，每日为一个学习单元，对应一篇课文和一个MP3.</p>
						<p className={style['listPage_p']}>《大家说英语》适合于初级的英文学习者，对口语和听力阅读的提高有非常好的帮助。</p>
						<p className={style['listPage_p_important']}>《大家说英语》的所有内容，全部由外教讲解，超级地道！</p>
						<p className={style['listPage_p']}>小编学习这套杂志多年，觉得非常有必要把这本杂志推荐给大家。不过，为保护原版杂志的版权，左边只能给大家分享一些往期的杂志样例了。</p>
						<p className={style['listPage_p']}>如果大家喜欢这本杂志，需要大家说英语2014年最新的学习资料的相关信息，可以加入EasyVOA提供给大家的<Link to='' className={style['listPage_p_important']}>空英学习交流QQ群：115390136</Link></p>
						<p className={style['listPage_p']}>关于《大家说英语》的学习材料真的是超级丰富，从这本杂志开始发行，到现在，可能已经超过50年了，通过这本杂志，小编觉得，你不仅仅可以学好英语，还可以学到更多文化底蕴哦～</p>
					</div>
					<div className='clear'></div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.getListInfo()
	}

	getListInfo( id ) {
		id = id || this.props.params.id;
		axios.get( '/api/list.json?id='+id )
			.then( this.props.handleGetDateSucc.bind( this ) )
	}
}

const mapStateToProps = ( state ) => ({
	data:state.list.data
})

const mapDispatchToProps = (dispatch) => ({
	handleGetDateSucc:( response ) => {
		const { data } = response.data;
		dispatch( getList( data ) );
	}
})

export default connect( mapStateToProps,mapDispatchToProps )(List);