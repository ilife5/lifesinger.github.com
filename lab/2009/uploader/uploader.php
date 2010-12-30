<?php

 $HOST = $_SERVER['HTTP_HOST'];

 if(DIRECTORY_SEPARATOR=='\\') {
	 sleep(1); // 本地加延时
	 $uploaddir = 'd:\\web_root\\htdocs\\lab\\2009\\uploader\\uploads\\';
 } else {
	 $uploaddir = '/home/lifesing/public_html/lab/2009/uploader/uploads/';
 }

 $filename = basename($_FILES['Filedata']['name']);
 $uploadfile = $uploaddir . $filename;
 $uri = 'http://' . $HOST . '/lab/2009/uploader/uploads/';
 
 if (move_uploaded_file($_FILES['Filedata']['tmp_name'], $uploadfile)) {
	 
	 if($_POST['batchPublishId'] == 0) { // 非批量发布
	 	echo '{"result": "1", "msg": "' . $uri . $filename . '"}';
	 } else { // 批量发布
		 echo '{"result": "3", "fileServeId": "' . rand(1, time()) . '", "msg": "等待发布…" }';
	 }

 } else {
     echo '{"result": "0", "msg": "上传过程中出错了"}';
 }

 //echo 'Here is some more debugging info:';
 //print_r($_FILES);
 //print_r($_POST);
?> 
