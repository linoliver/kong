import React, { Component } from 'react';
import { connect } from 'dva';
import { Carousel, WingBlank } from 'antd-mobile';

class Ban extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
 //   console.log(this.props)
    this.props.changeName()
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
  render() {
    
    const {banlist}=this.props
    //console.log(banlist.banlist)
    return (
      <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {banlist.banlist.map((val, index) => (
            <a
              key={val}
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={val.imageUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
const mapToProps=(state)=>{
//  console.log(state)
  return {banlist:state.index}
}
const bannerLinst =dispatch=>{
  return {
    changeName:type=>{
      dispatch({
        type:'index/bannerLinst',
        payload:type
      })
    }
  }
}
export default connect(mapToProps,bannerLinst)(Ban)