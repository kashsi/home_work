"use strict";

/* DATA ********************************** */

var answers = [[{
	ansText: "font-weight",
	ansTrue: true
}, {
	ansText: "font-size",
	ansTrue: false
}, {
	ansText: "font-style",
	ansTrue: false
}], [{
	ansText: "font-style",
	ansTrue: true
}, {
	ansText: "font-decoration",
	ansTrue: false
}, {
	ansText: "font-transform",
	ansTrue: false
}], [{
	ansText: "font-size",
	ansTrue: false
}, {
	ansText: "font-transform",
	ansTrue: false
}, {
	ansText: "font-decoration",
	ansTrue: true
}]];

var questions = [{
	quest: "What is the CSS font property setting the bold style font?"
}, {
	quest: "What is the CSS property doing the font italics?"
}, {
	quest: "What is the CSS property doing the font underline or clossline?"
}];

var answerData = answers;

var questionData = questions;

/* TEMPLATE ********************************** */

$(function () {

	var tmplHtml = $('#myTemplate').html();

	var tmplData = {
		title: 'Test on programming',
		buttonTitle: 'Verify my results',
		questionData: questionData,
		answerData: answerData
	};

	var content = tmpl(tmplHtml, {
		data: tmplData
	});

	$('body').append(content);

	return this;
});

/* CHECK TEST ********************************** */

$(function () {

	var $body = $('body');
	var $linkThis = this;

	var $overlay = $('<div class="modalOverlay"></div>');
	var $modalDialog = $('<div class="modalDialog"><div id="estimate"></div><button class="closeButton">Close</button></div>');
	$body.append($overlay);
	$body.append($modalDialog);
	$overlay.hide();
	$modalDialog.hide();

	var $idEstimate = $('#estimate');

	function showModal() {
		$overlay.show();
		$modalDialog.show();
	};

	function hideModal() {
		$overlay.hide();
		$modalDialog.hide();
	};

	$overlay.on('click', hideModal);

	var $closeButton = $('.closeButton');
	$closeButton.on('click', hideModal);

	var $verifyButton = $('.verifyButton');

	var $arrayRadio = [];
	var i = 0;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = questionData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var velQuest = _step.value;

			var nameRadio = "nameRadio_" + i;
			$arrayRadio[i++] = $('input:radio[name="' + nameRadio + '"]');
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	$verifyButton.on('click', function () {

		var result = 0;
		i = 0;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = questionData[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var velQuest = _step2.value;


				var $mRadio = $arrayRadio[i];

				var j = 0;
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = answerData[i][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var velAnswer = _step4.value;

						if (answerData[i][j].ansTrue && $mRadio[j].checked) result++;
						j++;
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}

				i++;
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		$idEstimate.text("Your result is " + result);
		showModal();

		i = 0;
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = questionData[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _velQuest = _step3.value;


				var _$mRadio = $arrayRadio[i];

				var _j = 0;
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = answerData[i][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var _velAnswer = _step5.value;

						_$mRadio[_j++].checked = false;
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}

				i++;
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}
	});

	return this;
});
