$(document).ready(function(){

	var commentFormCheck = (function(){

		// Приватная переменная модуля
		var _form = $('#comment-form'),
			_input = _form.find('textarea'),
			_error = _form.find('.error');

		// Метод иницифлизации (запуска) модуля / Публичный
		var init = function(){
			_setUpListeners();
		}

		// Метод рослушки событий
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_formValidate(event);
			})
		}

		// Приватные методы 
		var _formValidate = function(event){

			if (_input.val().trim() == '') {
				_error.slideDown(500);
				event.preventDefault();
			}

			_input.on('keydown', function(){
				_error.slideUp(500);
			});

		}

		// Функции, которые возвращаем
		return { init }

	}());

	commentFormCheck.init();

});