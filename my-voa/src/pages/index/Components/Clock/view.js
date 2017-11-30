import React,{ Component } from 'react';
import style from './style.mcss'

export default class Clock extends Component {
	render() {
		return(
			<canvas className ={style['canvas']} ref = { ( canvas ) =>{this.canvas = canvas} } width='400' height='400'></canvas>
		)
	}

	componentDidMount() {
		this.ctx = this.canvas.getContext( "2d" );
		this.init();
	}

	init() {
		const this_ = this;
		setInterval(function() {
			this_.ctx.clearRect( 0,0,400,400 );
			this_.drawClock();
		},1000)
	}

	drawClock() {
		this.drawTable();
		this.drawCenterPoint();
		this.drawTimePoint();
		this.drawHoursNumber();
		this.drawTimes();
	}

	drawTable() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate( 200,200 );
		this.ctx.arc( 0,0,150,0,Math.PI*2 );
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawCenterPoint() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate( 200,200 );
		this.ctx.arc( 0,0,5,0,Math.PI*2 );
		this.ctx.strokeStyle = 'red';
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawTimePoint() {
		this.ctx.save();
		this.ctx.translate( 200,200 );
		this.ctx.beginPath();
		for( let i=0;i<60;i++ ){
			this.ctx.moveTo( 0,-146 );
			if( i%5===0 ){
				this.ctx.lineTo( 0,-140 );
			}else{
				this.ctx.lineTo( 0,-144 );
			}
			this.ctx.rotate( Math.PI/30 );
		}
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawHoursNumber() {
		this.ctx.save();
		this.ctx.translate( 200,200 );
		this.ctx.beginPath();
		for( let i=1;i<=12;i++ ){
			this.ctx.font='20px Arial';
			this.ctx.textAlign = 'center';
			this.ctx.textBaseline = 'middle';
			this.ctx.fillText( i,Math.sin(Math.PI*i/6)*120,-Math.cos(Math.PI*i/6)*120 );
		}
		this.ctx.restore();
	}

	drawTimes() {
		const data = new Date(),
			  seconds = data.getSeconds(),
			  minutes = data.getMinutes(),
			  hours = (data.getHours()%12)+(minutes/60);
		this.drawSeconds( seconds );
		this.drawMinutes( minutes );
		this.drawHours( hours );
	}

	drawSeconds( seconds ) {
		this.ctx.save();
		this.ctx.translate( 200,200 );
		this.ctx.beginPath();
		this.ctx.rotate( Math.PI*seconds/30 );
		this.ctx.moveTo( 0,-100 );
		this.ctx.lineTo( 0,10 );
		this.ctx.strokeStyle = 'red';
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawMinutes( minutes ) {
		this.ctx.save();
		this.ctx.translate( 200,200 );
		this.ctx.beginPath();
		this.ctx.rotate( Math.PI*minutes/30 );
		this.ctx.moveTo( 0,-80 );
		this.ctx.lineTo( 0,5 );
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawHours( hours ) {
		this.ctx.save();
		this.ctx.translate( 200,200 );
		this.ctx.beginPath();
		this.ctx.rotate( Math.PI*hours/6 );
		this.ctx.moveTo( 0,-50 );
		this.ctx.lineTo( 0,5 );
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}
}