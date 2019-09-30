const port = process.env.PORT  || 8081;
module.exports = {
	port : port,
	db: {
		database: process.env.DB_NAME || 'website',
		user: process.env.DB_USER || 'website',
		password: process.env.DB_PASS || 'website',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: './website.sqlite'
		} 
	}
} 