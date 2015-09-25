module.exports = function() {
	var config = {
		allTs: ['./app/**/*.ts', './app/**/*.tsx'],
		typings: './typings/**/*.d.ts',
		tsOutputPath: './dist/'
	};

	return config;
}