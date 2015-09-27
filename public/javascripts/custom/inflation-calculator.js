function InflationCalculator() {
	this.start =  $('#startDate').val();
	this.end =  $('#endDate').val();
	this.amount = $('#startPrice').val();
}

function fetchOptions() {
	return new InflationCalculator;
}

function addPriceToPage(number) {
	var num = number.replace ( /[^\d.]/g, '' );
	$('#endPrice').val(num);
	return num;
}

function priceFor(options, examineData) {
	var apiUrl = 'http://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?';
	$.getJSON(apiUrl, {
		country: 'united-states',
		start: options.start,
		end: options.end,
		amount: options.amount,
		format: true
	})
	 .done(function (data) {
		examineData(data);
	 });
}

function fetchEndPrice(options) {
	priceFor(options, addPriceToPage);
}
