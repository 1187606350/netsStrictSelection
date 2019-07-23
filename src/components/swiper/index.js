import React ,{Fragment} from "react";
import Baseswiper from "swiper";
import propTypes from "prop-types";
import "swiper/dist/css/swiper.css"
import "./index.css"
class Swiper extends React.Component{
    state = {
        bannerList: []
    }
    render() {
        let { pagination,navigation } = this.props;
        let className = `swiper-container ${this.props.className}`
        let slide = this.state.bannerList
        if (slide.length > 0) {
            return (
                <div className={className} style={this.props.style}>
                    <div className="swiper-wrapper">
                        {
                            slide.map((item, index) =>{
                                return (
                                    <div key={index} className="swiper-slide">
                                        <img src={item} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    {
                        pagination && <div className="swiper-pagination"></div>
                    }
                    
                    {/* <!-- 如果需要导航按钮 --> */}
                    {
                        navigation && (
                            <Fragment>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </Fragment>
                        )
                    }
                </div>
            )
        }else{
            return null
        }
    };
    getBannerList() {
        fetch("http://localhost:3000/swiper",).then(response => response.json()).then(res => {
            this.setState({
                bannerList: res.map(item => {
                    return item.swiUrl
                })
            })
        })
    };
    initSwiper() {
       this.mySwiper = new Baseswiper('.swiper-container',{
            //选项配置
            autoplay: this.props.autoPlay,
            pagination: this.props.pagination ? {
                el: '.swiper-pagination',
            } : {},
            navigation: this.props.navigation ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            } : {}
        })
    };
    componentDidUpdate() {
        if (this.mySwiper) {
            this.mySwiper.destroy()
        }
        this.initSwiper();
    }
    componentDidMount() {
        this.getBannerList();
    }
}
//props 校验
Swiper.propTypes = {
    pagination: propTypes.bool,// 分页器
    navigation:propTypes.bool, //上下页
    autoplay: propTypes.bool
};

//设置prop默认值
Swiper.defaultProps = {
    pagination: true, 
    navigation: false,
    autoplay:true
}

export default Swiper;