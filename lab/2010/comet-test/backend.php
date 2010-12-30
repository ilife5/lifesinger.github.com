<?php
    header("Cache-Control: no-cache");
    flush();

    echo time().'<br />';
    sleep(1);

    //while(1) {
//    for($i = 0; $i < 5; $i++) {
//        echo time().'<br />';
//        flush();
//
//        sleep(1); // a little break to unload the server CPU
//    }
?>