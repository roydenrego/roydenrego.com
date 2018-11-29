# roydenrego.com
> Personal Portfolio website built in Node.js using the Stimulus Template

[![License](https://img.shields.io/github/license/roydenrego/roydenrego.com.svg)](https://github.com/roydenrego/roydenrego.com/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/roydenrego/roydenrego.com.svg?branch=master)](https://travis-ci.org/roydenrego/roydenrego.com) 

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing & Local Development](#installing--local-development)
- [Built With](#built-with)
- [Changelog](#changelog)
- [Authors](#authors)
- [License](#license)
  
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Prerequisites

In order to run this site on your local machine all what you need to do is to have the prerequisites stated below installed on your machine and follow the installation steps down below.

  - Node.js
  - Yarn or NPM
  - Git
  
#### Installing & Local Development
Start by typing the following commands in your terminal in order to get **Adminator** full package on your machine and starting a local development server with live reload feature.

```
> git clone https://github.com/roydenrego/roydenrego.com.git roydenrego
> cd roydenrego
> npm install
```

Create a .env file in the root of the project whose contents should be as below:

```
DB_CONN="DATABASE_CONNECTION_STRING_HERE"
SENDGRID_API_KEY="SENDGRID_API_KEY_HERE"
AWS_ACCESS_KEY="FILL_HERE"
AWS_SECRET_ACCESS_KEY="TO_BE_FILLED"
SESS_SECRET="ANY_RANDOM_STRING_OF_YOUR_CHOICE"
```

You need to replace the placeholders with actual API Keys which can be obtained from the appropriate vendors.
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - [SendGrid](https://sendgrid.com/)
  - [AWS S3](https://aws.amazon.com/s3/)

Once the .env file is setup, you can run the website by executing the following command:
```
> npm start
```

## Built With
- Stimulus Template: [http://www.templatemo.com/tm-498-stimulus](http://www.templatemo.com/tm-498-stimulus)
- News Cards: [https://codepen.io/choogoor/pen/YWBxAg](https://codepen.io/choogoor/pen/YWBxAg)
- SRTdash: [https://github.com/puikinsh/srtdash-admin-dashboard](https://github.com/puikinsh/srtdash-admin-dashboard)

## Changelog
#### V 1.0.0
Initial Release

## Authors
[Royden Rego](https://roydenrego.com)

## License

roydenrego.com is licensed under The MIT License (MIT). Which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the final products. But you always need to state that Royden Rego is the original author of this template. See ``LICENSE`` for more information.
