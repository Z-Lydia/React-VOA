import React,{Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import echarts from 'echarts';
import'./style.css'

class Detail extends Component {
	constructor( props ){
		super( props );
		this.state={
			dataInfo:[],
		};
		this.flag = false;
		
	}

	componentWillReserveProps( nextProps ) {
		if( nextProps.params.id !==this.props.params.id ){
			this.getDetailInfo();
		}
	}
	render() {
		return(
			<div className='detailPage_container'>
				<input className='detailPage_playBtn' ref={ (playBtn) =>{ this.playBtn=playBtn } } width='20px' height='20px' type='image' alt='播放' title='点击播放全文' src={require('../../static/image/radio.jpg')}  />
				{
					this.state.dataInfo.map( ( item ) =>{
						return(
							<div key={item.id} className='detailPage_left'>
								<div className='detailPage_audio_container'>
									<audio ref={ (audio) =>{ this.audio=audio } } className='detailPage_audio' controls src={require('../../static/radio/D_1.mp3')}></audio>
									
								</div>
								<div className='detailPage_nav'>
									<Link to='' className='detailPage_nav_a'>VOA</Link>
									>
									<Link to='' className='detailPage_nav_a'>VOA英语教学</Link>
									>
									<Link to='' className='detailPage_nav_a'>{item.parentList}</Link>
								</div>
								<div className='detailPage_left_title_container'>
									<h2 className='detailPage_left_title'>{item.title}</h2>
									<p className='detailPage_left_title_Info'>
										<span>时间：</span>{item.time}
										<span>来源：</span>{item.source}
										<span>收听下载次数：</span>{item.downloadCount}次
									</p>
								</div>
								<div className='detailPage_article_container'>
									<div className='detailPage_article_ad' ref={(ad) =>{this.ad=ad}}></div>
									<div dangerouslySetInnerHTML={{__html:item.content}}></div>
								</div>
							</div>
						)
					} )
				}	
				<div className='detailPage_right' ref={(right_ad) => { this.Dright_ad = right_ad }}>
					<div className='detailPage_right_ad'>
						<img className='detailPage_right_ad_img' src={require('../../static/image/ad_1.jpg')} alt='广告' title='广告' />
						<img className='detailPage_right_ad_img' src={require('../../static/image/ad_1.jpg')} alt='广告' title='广告' />
						<img className='detailPage_right_ad_img' src={require('../../static/image/ad_1.jpg')} alt='广告' title='广告' />
						<img className='detailPage_right_ad_img' src={require('../../static/image/ad_1.jpg')} alt='广告' title='广告' />
						<img className='detailPage_right_ad_img' src={require('../../static/image/ad_1.jpg')} alt='广告' title='广告' />
					</div>
				</div>
				<div className='clear'></div>
			</div>
		)
	}

	componentDidMount() {
		this.getDetailInfo();
		window.addEventListener( "scroll",this.handleScrollChange.bind(this) );
		this.playBtn.addEventListener( "click",this.handleBtnClick.bind( this ) );
	}

	getDetailInfo( id ) {
		id = id||this.props.params.id;
		axios.get( '/api/details.json?id='+id )
			.then( this.handleGetDataSucc.bind( this ) );  
	}

	handleGetDataSucc( response ) {
		 const {data} = response.data
		this.setState({
			dataInfo:data
		})
	}

	handleScrollChange() {
		if( this.Dright_ad ){
			let tmp=[];
			if( document.documentElement.scrollTop >= 240 ){
				tmp=['fixed','4px','120px'];
			}else{
				tmp=['absolute','0px','0px'];
			}
			this.Dright_ad.style.position = tmp[0];
			this.Dright_ad.style.top = tmp[1];
			this.Dright_ad.style.right = tmp[2];
		}
	}		

	componentDidUpdate() {
		const myCharts = echarts.init( this.ad );
		var base = +new Date(1968, 9, 3);//设置起始年份1968年10月4日
		var oneDay = 24 * 3600 * 1000;
		var date = [];

		var data = [Math.random() * 300];

		for (var i = 1; i < 20000; i++) {
		    var now = new Date(base += oneDay);
		    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
		    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
		}

		var option = {
		    tooltip: {
		        trigger: 'axis',
		        position: function (pt) {
		            return [pt[0], '10%'];
		        }
		    },
		    title: {
		        left: 'center',
		        text: '大数据量面积图',
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: date
		    },
		    yAxis: {
		        type: 'value',
		        boundaryGap: [0, '100%']
		    },
		    series: [
		        {
		            name:'模拟数据',
		            type:'line',
		            smooth:true,
		            symbol: 'none',
		            sampling: 'average',
		            itemStyle: {
		                normal: {
		                    color: 'rgb(255, 70, 131)'
		                }
		            },
		            areaStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgb(255, 158, 68)'
		                    }, {
		                        offset: 1,
		                        color: 'rgb(255, 70, 131)'
		                    }])
		                }
		            },
		            data: data
		        }
		    ]
		};

		myCharts.setOption(option);
	}

	handleBtnClick() {
		console.log( this.flag )
		if( this.flag === false ){
			this.audio.play();
			this.flag = true;
			console.log( this.flag )
		}else{
			this.audio.pause()
			this.flag = false;
		}
		
	}

	componentWillUnmount() {
		window.removeEventListener( "scroll",this.handleScrollChange.bind(this) )
	}
}

export default Detail;