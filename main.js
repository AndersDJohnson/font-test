$.getJSON('fonts.json').
	done(function (json, status, xhr) {
		buildFonts(json);
	});

var buildFonts = function (fonts) {
	$(function () {
		var $controls = $('#controls');
		var $chars = $('#chars');

		var $select = $('<select></select>');
		$select.attr('id', '#fonts');
		$select.detach();
		$.each(fonts, function (i, v) {
			var $option = $('<option />');
			$option.attr('val', v);
			$option.html(v);
			$select.append($option);
		});
		
		$select.on('change', function (e) {
			var val = $select.val();
			console.log(val);
			$chars.css('font-family', val);
		});

		$controls.append($select);
	});
};

var addCodePoint = function (codePoint) {
	var chr = String.fromCharCode(codePoint);
	var hex = codePoint.toString(16)
	var chrHTML = '<div class="char" title="' + hex + '">' + chr + ' <span class="hex">' + hex + '</span></div>';
	var $chr = $(chrHTML);
	$('#chars').append($chr);
};

$(function () {

	addASCII();
	addPrivateUseArea();

});

var addASCII = function () {
	var start = 60;
	var end = 146;
	var codePoint = start;
	while (codePoint <= end) {
		addCodePoint(codePoint);
		++codePoint;
	}
};

var addPrivateUseArea = function () {
	var start = 0xE000;
	var end = 0xF8FF;
	var codePoint = start;
	while (codePoint <= end) {
		addCodePoint(codePoint);
		++codePoint;
	}
};
