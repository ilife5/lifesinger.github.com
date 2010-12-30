<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />	
<title>Firefox Autocomplete Test</title>
<link rel="stylesheet" href="assets/reset-grids.css" type="text/css" media="screen" />
<style type="text/css">
	body { font: 12px/18px Tahoma,Arial,sans-serif; color: #333; padding: 60px }
</style>
</head>
<body>
<?php if($_GET['data'] != '') { ?>
<p> Done successfully!</p>
<?php } else { ?>
<form onsubmit="javascript: this.submitBtn.disabled='disabled'" action="firefox_autocomplete_test.php" method="get">
	<input name="data" autocomplete="off" type="text" value="1234" size="12" />
	<input name="submitBtn" autocomplete="off" type="submit" value="submit" />
</form>
<?php } ?>
</body>
</html>
