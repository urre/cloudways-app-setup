# Create an application on [Cloudways](https://cloudways.com/) via [API](https://developers.cloudways.com/)

A simple Node.js script using the [axios](https://github.com/axios/axios) http client.

Create `env` from `.env-example`

```shell
cp .env-example .env
```

Fill in your credentials in `.env`

Example:

```yaml
CLOUDWAYS_EMAIL="your@email.domain"
CLOUDWAYS_API_KEY="XXXXXXXXX"
CLOUDWAYS_API_BASEURL="https://api.cloudways.com/api/v1"

CLOUDWAYS_SERVER_ID="XXXXX"
CLOUDWAYS_PROJECT_NAME="myproject"
CLOUDWAYS_APP_NAME="demoapp"
CLOUDWAYS_APPLICATION="phpstack"
CLOUDWAYS_APP_VERSION="5.4"
```

Install dependencies

```shell
npm install
```

Create your app

```shell
npm start
```

✅ Your application is now created on your Cloudways server, in your selected project using your selected application stack and version.
