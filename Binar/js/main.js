//@prepros-append jq-start.js
//@prepros-append forms.js
//@prepros-append script.js
//@prepros-append jq-end.js

$('.menu-burger--gray').on('click', function () {
	$('#mobile-menu').fadeIn('fast');
});

$('.mobile-menu__link').on('click', function () {
	$('#mobile-menu').fadeOut('fast');
});

$('.cross').on('click', function () {
	$('#mobile-menu').fadeOut('fast');
});

const selected = document.querySelector(".select-box__selected");
const optionsContainer = document.querySelector(".select-box__options-container");
const optionsList = document.querySelectorAll(".select-box__option");

if (!!selected) {
	selected.addEventListener("click", () => {
		optionsContainer.classList.toggle("active");
	});
};

if (!!selected && !!optionsContainer) {
	optionsList.forEach(o => {
		o.addEventListener("click", () => {
			selected.innerHTML = o.querySelector("label").innerHTML;
			optionsContainer.classList.remove("active");
		});
	});
};

$('.contacts-form__button').click(function () {
	$('.contacts-form__button').removeClass('active-btn');
	$(this).addClass('active-btn');
});

$('.contacts-form').on('submit', function(e) {
	e.preventDefault();
	let formButton = $('.contacts-form__button.active-btn');
	let selectBox = $('.select-box__selected');
	let data = $(this).serializeArray();
	
	if(! $('.select-box__option').hasClass('active')){
		$('#objTypeTitle').css('color', 'red')
		return;
	}

	data.push({
		"name": "category", 
		"value": formButton.text()
	});
	data.push({
		'name': 'objectType',
		'value': selectBox.text().trim()
	});
	console.log(data);
	
	$.ajax({
			url: 'handler.php',
			type: "POST",
			dataType: 'json',
			data: data,
			success: function (response) {
				
			},
	});
});

$('.select-box__option').on('click', function () {
	$('.select-box__option').removeClass('active');
	$(this).addClass('active');
	$('#objTypeTitle').removeAttr('style');
});
