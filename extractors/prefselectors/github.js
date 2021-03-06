var BINPrefselector = ( function () {

	// a shadow as a "promise not to touch global data and variables". Must be included to be accepted!
	var BINData = null;
	var BINInteraction = null;
	var BINParser =  null;
	var window = null;
	var document = null;

	// these are the preferred selectors used, and may be modified. The format is "bibfield: [ [css-selector,attribute], ...],", where "attribute" can be any html tag attribute or "innerText" to get the text between <tag> and </tag>
	var prefselectorMsg = { 
		citation_author: [ ['span[itemprop="author"]','innerText'] ],
		citation_title: [ ['strong[itemprop="name"]','innerText'] ],
		citation_date: [ ['div.commit-tease span[itemprop="dateModified"] relative-time','datetime'] ]
	};

	// finally expose selector message
	return { prefselectorMsg: prefselectorMsg };

}());
