import _ from 'underscore';

/**
 * CubitWorx html attributes helpers
 */
module.export = attributes = {
	stringify: stringify
};

/**
 * Stringify object into HTML attribute string. If one of the values is an array it will be joined with a space
 * 
 * @param {Object} attrs Each key=value pair of attributes where key is used for attribute name and value for attribute value
 * @param {Object[]} [include] Attributes to be included from resulting string
 * @param {Object[]} [exclude] Attributes to be excluded from resulting string
 * @returns {String} HTML attribute string
 */
function stringify(attrs,include,exclude) {
	if( !attrs )
		return '';

	let result = [];

	_.each(attrs, function (value, key) {
		if( ( include && ( include.indexOf(key) === -1 ) ) || ( exclude && ( exclude.indexOf(key) !== -1 ) ) )
			return;

		if (!value) {
			result.push(key);
		} else {
			if (_.isArray(value))
				value = value.join(' ');
			result.push(key + '="' + value + '"');
		}
	});

	return result.join(' ');
}
