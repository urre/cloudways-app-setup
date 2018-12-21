const axios = require('axios')
const qs = require('qs')
const prettyjson = require('prettyjson');
const config = require('./lib/config')
let accesstoken = ''

axios({
	method: 'POST',
	headers: { 'content-type': 'application/x-www-form-urlencoded' },
	data: qs.stringify(config.credentials),
	url: config.cloudways.CLOUDWAYS_API_ACCESS_TOKEN_URL
})
	.then(response => response.data)
	.then(data => data)
	.then(data => {
		console.log(`✅ Cloudways access token: ${data.access_token}`)
		accesstoken = data.access_token
		return axios({
			method: 'GET',
			headers: { Authorization: `Bearer ${data.access_token}` },
			url: config.cloudways.CLOUDWAYS_API_SERVER_URL
		})
	})
	.then(data => {
		return axios({
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${accesstoken}`,
				'Content-type': 'application/x-www-form-urlencoded'
			},
			data: qs.stringify(config.appdetails),
			url: `${config.cloudways.CLOUDWAYS_API_BASEURL}/app`,
		})
	})
	.then(response => {
		response.status === 200 ? console.log(`✅ Successfull setup of ${config.appdetails.app_label} (${config.appdetails.application})`) : ''
	})
	.catch(err => {
		console.log(prettyjson.render(err))
	})
