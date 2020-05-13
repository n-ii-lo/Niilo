<?php
$requiredKeys = [
	"name" => 'Имя',
	"email" => 'Имейл',
	"tel" => 'Телефон',
	"category" => 'Категория',
	"objectType" => 'Тип объекта',
	"squareArea" => 'Квадратура м²',
	"comment" => 'Комментарий'
];

$validData = [];
foreach ($_POST as $key => $value) {
	if(array_key_exists($key, $requiredKeys) && !empty($value)) {
		$validData[$key] = $value;
	}
}

if(count($validData) === count($requiredKeys)) {
	$result = '';

	foreach ($validData as $key => $value) {
		$result .= $requiredKeys[$key]." : ".$value."," . PHP_EOL;
	}

	mail('de.niilo.048@gmail.com', 'subject', $result);
}