<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<title>UED StartPage</title>
<link rel="icon" href="favicon.ico">
<style type="text/css">
* { margin: 0; padding: 0; }
html { overflow-x: hidden; }
body {
    font: 13px / 170% Helvetica, Tahoma, Arial, sans-serif;
    padding: 10px 50px;
}
a { color: #008080; text-decoration: none; }
a:hover { text-decoration: underline; }
a img { border: none; }
h1, h2 {
    font: normal 32px '微软雅黑', '华文黑体', STHeiti, Georgia, 'Times New Roman', Times, serif;
    color: #333;
    margin: 0.5em 0;
}
h1 span { color: #008080; font-size: 12px; font-family: '宋体', sans-serif; position: relative; left: 5px; bottom: 7px; }
h2 { color: #335974; margin: 0.5em 0 0.2em; }
ul { padding-left: 30px; }
ul li { list-style: none; background: url(dot.gif) no-repeat 0 50%; padding-left: 15px; *padding-bottom: 5px;}

.description { margin-left: 170px; margin-top: -10px; }
.section { float: left; width: 280px; height: 290px; overflow: hidden; color: #999; }
.copyright { clear: both; text-align: center; color: #999; }
.new { padding-left: 5px; color: #f60; font-size: 12px; font-family: '宋体', sans-serif; }
.hidden { display: none; }

/* hack */
body { _font-size: 12px; }
</style>
</head>
<body>
<h1><a href="http://taobao.com/"><img src="ued.png" alt="Taobao UED" /></a><span>常用链接</span></h1>

<p class="description"> - 做地球上最好的 UED</p>

<?php $isLocal = $_SERVER['HTTP_HOST'] != "wiki.ued.taobao.net"; ?>
<div class="section<?php if(!$isLocal) { ?> hidden<?php } ?>">
    <h2>Recently</h2>
    <ul>
        <li>space/ <a href="/space/lab/2011/">lab</a> | <a href="/space/test.html">test</a></li>
        <li>seajs/ <a href="/seajs/src/">src</a></li>
        <li>github: <a href="http://github.com/seajs">seajs</a></li>
        <li>sites: <a href="http://api.jquery.com/">jquery</a> | <a href="http://developer.yahoo.com/yui/3/">yui3</a></li>
        <li>/ <a href="/third-party/">third-party</a></li>
    </ul>
</div>

<div class="section">
    <h2>工作入口</h2>
    <ul>
        <li><a href="http://jira.taobao.ali.com/">JIRA</a> | <a href="http://wf.taobao.ali.com/">工作流平台</a></li>
        <li><a href="http://tms.taobao.com/">TMS</a> | <a href="http://tps.tms.taobao.com/">TPS</a> | <a href="chrome-extension://hehijbfgiekmjfkfjpbkbammjbdenadd/iecontainer.html#url=http%3A%2F%2F10.1.6.138%3A8080%2Fqcbin%2Fstart_a.htm">QC</a></li>
        <li><a href="http://192.168.208.47/cgi-bin/php_update.pl">PHP 提交</a> | <a href="http://test.ued.taobao.net">PHP 测试</a></li>
        <li><a href="http://qpub.daily.taobao.net/main.html">模板同步</a> | <a href="http://www.page.taobao.net/">模板测试</a></li>
        <li><a href="http://wiki.ued.taobao.net/doku.php?id=work:svn-branches">Assets 分支地址</a></li>
        <li><a href="http://scm.taobao.net/">SCM 配置管理中心</a></li>
    </ul>
</div>

<div class="section">
    <h2>规范指南</h2>
    <ul>
        <li><a href="http://wiki.ued.taobao.net/doku.php?id=work:newbie-guide">新人指南</a></li>
        <li><a href="http://wiki.ued.taobao.net/doku.php">UED Wiki 平台</a></li>
        <li><a href="http://wiki.ued.taobao.net/doku.php?id=interaction:index">交互设计规范</a></li>
        <li><a href="http://wiki.ued.taobao.net/doku.php?id=visual:index">视觉设计规范</a></li>
        <li><a href="http://wiki.ued.taobao.net/doku.php?id=f2e:index">前端开发规范</a></li>
        <li><a href="http://wiki.ued.taobao.net/doku.php?id=wf:index">工作流程规范</a></li>
        <li><a href="http://wiki.ued.taobao.net/doku.php?id=wap:index">无线淘宝设计开发指南</a></li>
    </ul>
</div>

<div class="section">
    <h2>人在江湖</h2>
    <ul>
        <li><a href="https://alihr.alibaba.com:4430/psp/alihr/?cmd=login&languageCd=ZHS">PeopleSoft</a></li>
        <li><a href="https://is.taobao.org/site/">内网导航</a> | <a href="http://www.aliway.com/thread.php?fid=hbb">阿里味儿</a></li>
        <li><a href="https://is.taobao.org/meeting/">会议室预订</a> | <a href="https://www.cn.alibaba-inc.com/admin/office_mama.nsf/ApplyForm?OpenForm">办公物品领用</a></li>
        <li><a href="http://www.taobao.ali.com/">淘宝之家</a> | <a href="https://www.cn.alibaba-inc.com/">阿里内网</a></li>
        <li><a href="http://www.taobao.ali.com/chanpin/UED/ProjectManagement/default.aspx">UED 周报</a>（<a href="http://www.taobao.ali.com/chanpin/UED/ProjectManagement/Lists/List1/NewForm.aspx?RootFolder=%2Fchanpin%2FUED%2FProjectManagement%2FLists%2FList1&ContentTypeId=0x01008C1AC21A49C1D84D89379DC2EBD4B4D8x">填写项目周报</a> | <a href="http://www.taobao.ali.com/chanpin/UED/ProjectManagement/Lists/List1/NewForm.aspx?RootFolder=%2Fchanpin%2FUED%2FProjectManagement%2FLists%2FList1&ContentTypeId=0x0100866DEE0888655B4C80DE73977A3F94B003001A85E859989E1F44B6559E2E9CB8D06C">日常周报</a>）</li>
        <li><a href="http://www.taobao.ali.com/Lists/xiaoer/view.aspx">淘宝小二名录</a> | <a href="http://www.taobao.ali.com/chanpin/UED/ProjectManagement/Lists/UED/AllItems.aspx">UED 小二名录</a></li>
        <li><a href="https://www.cn.alibaba-inc.com/certca.nsf">申请内网验证字</a></li>
        <li><a href="http://list.alibaba-inc.com/Portal/Mail/ManageMailList">邮件列表管理</a></li>
    </ul>
</div>

<div class="section">
    <h2>学习交流</h2>
    <ul>
        <li><a href="http://ued.taobao.com/blog/">UED Blog</a> | <a href="http://ued.taobao.com/blog/wp-login.php">admin</a></li>
        <li><a href="http://wiki.ued.taobao.net/doku.php?id=lazytalk:index">懒懒交流会</a></li>
        <li><a href="http://www.taobao.ali.com/chanpin/km/ued/ShareMeeting/default.aspx">碳酸饮料会</a></li>
        <li><a href="http://wiki.ued.taobao.net/doku.php?id=milktea:index">珍珠奶茶帮</a></li>
        <li><a href="http://ue.taobao.ali.com/">UE 平台</a> | <a href="http://bangpai.taobao.com/group/332668.htm">啄木鸟</a></li>
        <li><a href="http://www.taobao.ali.com/chanpin/km/ued/Lists/UED/AllItems.aspx">UED 书库</a></li>
        <li><a href="http://www.d2forum.org/">D2 前端技术论坛</a></li>
    </ul>
</div>

<div class="section">
    <h2>辅助信息</h2>
    <ul>
        <li><a href="http://monitor.taobao.com/monitor-report/performance/frontPerformance.htm">哈勃监控系统</a></li>
        <li><a href="http://app.ops.taobao.net/check/">淘宝二级域名查询</a></li>
        <li><a href="file://tbnas/">文件共享服务器</a></li>
    </ul>
</div>

<p class="copyright">©Taobao UED - 维护：玉伯</p>
</body>
</html>
