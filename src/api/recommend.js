import jsonp from '../common/js/jsonp.js'
import {RecommendParams, options} from './config.js'


export function getRecommend () {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	const data = Object.assign({}, RecommendParams, {
		uin: 0,
		platform: 'h5',
		needNewCode: 1
	})
	return jsonp(url, data, options)
}
