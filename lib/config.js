const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

var cloudways = {
	CLOUDWAYS_EMAIL: process.env.CLOUDWAYS_EMAIL,
	CLOUDWAYS_API_KEY: process.env.CLOUDWAYS_API_KEY,
	CLOUDWAYS_API_BASEURL: process.env.CLOUDWAYS_API_BASEURL,
	CLOUDWAYS_SERVER_ID: process.env.CLOUDWAYS_SERVER_ID,
	CLOUDWAYS_PROJECT_NAME: process.env.CLOUDWAYS_PROJECT_NAME,
	CLOUDWAYS_APP_NAME: process.env.CLOUDWAYS_APP_NAME,
	CLOUDWAYS_APPLICATION: process.env.CLOUDWAYS_APPLICATION,
	CLOUDWAYS_APP_VERSION: process.env.CLOUDWAYS_APP_VERSION,
	CLOUDWAYS_API_ACCESS_TOKEN_URL: `${
		process.env.CLOUDWAYS_API_BASEURL
	}/oauth/access_token`,
	CLOUDWAYS_API_SERVER_URL: `${process.env.CLOUDWAYS_API_BASEURL}/server`,
	CLOUDWAYS_API_APP_URL: `${process.env.CLOUDWAYS_API_BASEURL}/app/creds`
}

var credentials = {
	email: cloudways.CLOUDWAYS_EMAIL,
	api_key: cloudways.CLOUDWAYS_API_KEY
}

var appDetails = {
	server_id: cloudways.CLOUDWAYS_SERVER_ID,
	application: cloudways.CLOUDWAYS_APPLICATION,
	app_version: cloudways.CLOUDWAYS_APP_VERSION,
	app_label: cloudways.CLOUDWAYS_APP_NAME,
	project_name: cloudways.CLOUDWAYS_PROJECT_NAME
}

module.exports = {
  cloudways: cloudways,
  credentials: credentials,
	appdetails: appDetails
};
