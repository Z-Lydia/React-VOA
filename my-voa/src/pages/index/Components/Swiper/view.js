import React,{Component} from 'react';
import './swiper.css';
import style from './style.mcss';
import Swiper from '../../../../../node_modules/swiper/dist/js/swiper';

export default class Ad extends Component {
	render() {
		return (
			<div className={style["swiper-container"]} ref={ (swiper) =>{this.swiper=swiper} }>
				<div className='swiper-wrapper'>
					<div className='swiper-slide'><img className={style['swiper_img']} src={require( '../../../../static/image/timg.jpg' )} alt='T.O.P' title='T.O.P' /></div>
					<div className='swiper-slide'><img className={style['swiper_img']} src={require( '../../../../static/image/TOP.jpeg' )} alt='T.O.P' title='T.O.P' /></div>
					<div className='swiper-slide'><img className={style['swiper_img']} src={require( '../../../../static/image/Top.jpg' )} alt='T.O.P' title='T.O.P' /></div>
					<div className='swiper-slide'><img className={style['swiper_img']} src={require( '../../../../static/image/top1.jpg' )} alt='T.O.P' title='T.O.P' /></div>
					<div className='swiper-slide'><img className={style['swiper_img']} src={require( '../../../../static/image/top2.jpeg' )} alt='T.O.P' title='T.O.P' /></div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		const mySwiper = new Swiper( this.swiper,{
			autoplay: true,
		} )
	}
}