<template>
<div>
    <div class="panel panel-default">
<!-- Default panel contents -->
<div class="panel-heading"><h2>Write</h2></div>

<div class="panel-body"> 
    <!-- // 패널 사용 -->

<div class="container">
<form action="insert.php" method="post">  
    <!-- // board테이블에 저장하기 위한 form. 저장한 내용을 insert.php를 통해서 넣을 것이다.  -->

<form role="form">
    <div class="row">
<div class="col-md-6"> 
    <!-- // container 안에서 grid system 사용 -->
<div class="form-group">
<label for="name">NAME</label>
<input type="text" class="form-control" name="name" id="name" placeholder="Enter name">
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<label for="pass">Password</label>
<input type="password" class="form-control" name="pass" id="pass" placeholder="Enter password">
</div>
</div>
<div class="form-group">
<label for="subject">Title</label>
<input type="text" class="form-control" name ="subject" id="subject" placeholder="Enter title">
</div>
<div class="form-group">
<label for="content">Comment:</label>
<textarea class="form-control" rows="10" name="content" id="content"></textarea>
<!-- //글 내용이 많으므로 <textarea>태그를 쓴다 rows는 textarea의 높이 조절  -->
</div>
<div class="form-group">
<label for="File">File input</label>
<input type="file" id="File">
</div>
<div class="center-block" style='width:200px'>
<input type="submit" value="저장하기"> <input type="reset" value="다시쓰기"> <input type="button" value="Back" onclick="history.back(1)"></div>
</div>
</template>