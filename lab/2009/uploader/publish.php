<?php

$rand = rand();
$output = '';

if($rand % 5 != 0) { // 让20%的概率失败
	$fileServeIds = split(',', $_POST['fileServeIds']);
	$arr = array();
	foreach($fileServeIds as $key) {
		$arr[$key] = 'http://tps.taobao.com/' . $key . '.xxx';
	}

	$output = '{';
	$i = 0;
	foreach($arr as $key=>$val) {
		$output .= '"' . $key . '":"' . $val . '"';
		$i++;
		if($i != count($arr)) {
			$output .= ',';
		}
	}
	$output .= '}';	
} else {
	$output = '{"result": "4", "msg": "上传已取消"}';
}

sleep(1); // 延时
echo $output;

//print_r($_POST);
?>
