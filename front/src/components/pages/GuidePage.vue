<template>
  <div class="container bootstrap snippets bootdey">
    <div class="row">
      <div class="col-sm-10">
        <h1>홍길동</h1>
      </div>
      <div class="col-sm-2">
        <a href="/users" class="pull-right"
          ><img
            title="profile image"
            class="img-circle img-responsive"
            src="/src/assets/team/Hi1.Png"
        /></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <!--left col-->

        <ul class="list-group">
          <li class="list-group-item text-muted">Profile</li>
          <li class="list-group-item text-right">
            <span class="pull-left"><strong>회원</strong> 가이드 </span>
          </li>
          <li class="list-group-item text-right">
            <span class="pull-left"><strong>주소</strong></span> 서울 강남구
            언주로 508 (역삼동)
          </li>
          <li class="list-group-item text-right">
            <span class="pull-left"><strong>가입일</strong></span> 2020-02-15
          </li>
        </ul>

        <div style="height: 20px"></div>

        <ul class="list-group">
          <li class="list-group-item text-muted">
            Activity <i class="fa fa-dashboard fa-1x"></i>
          </li>
          <li class="list-group-item text-right">
            <span class="pull-left"><strong>가이드 활동 횟수</strong></span> 5
          </li>
          <li class="list-group-item text-right">
            <span class="pull-left"><strong>후기</strong></span> 5
          </li>
          <li class="list-group-item text-right">
            <span class="pull-left"><strong>좋아요</strong></span> 37
          </li>
          <li class="list-group-item text-right">
            <span class="pull-left"><strong>소개페이지 조회</strong></span> 125
          </li>
        </ul>
      </div>
      <!--/col-3-->
      <div class="col-sm-9">
        <div class="tab-content">
          <div class="tab-pane active" id="home">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>신청일</th>
                    <th>신청인</th>
                    <th>신청기간</th>
                    <th>신청인원</th>
                    <th>장소</th>
                    <th>요청상태</th>
                  </tr>
                </thead>
                <tbody id="items">
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <div class="row">
                <div class="col-md-4 col-md-offset-4 text-center">
                  <ul class="pagination" id="myPager"></ul>
                </div>
              </div>
            </div>
            <!--/table-resp-->

            <hr />
          </div>
          <!--/tab-pane-->
          <div class="tab-pane" id="messages">
            <h2></h2>

            <ul class="list-group">
              <li class="list-group-item text-muted">Inbox</li>
              <li class="list-group-item text-right">
                <a href="#" class="pull-left"
                  >Here is your a link to the latest summary report from
                  the..</a
                >
                2.13.2014
              </li>
              <li class="list-group-item text-right">
                <a href="#" class="pull-left"
                  >Hi Joe, There has been a request on your account since that
                  was..</a
                >
                2.11.2014
              </li>
              <li class="list-group-item text-right">
                <a href="#" class="pull-left"
                  >Nullam sapien massaortor. A lobortis vitae, condimentum
                  justo...</a
                >
                2.11.2014
              </li>
              <li class="list-group-item text-right">
                <a href="#" class="pull-left"
                  >Thllam sapien massaortor. A lobortis vitae, condimentum
                  justo...</a
                >
                2.11.2014
              </li>
              <li class="list-group-item text-right">
                <a href="#" class="pull-left"
                  >Wesm sapien massaortor. A lobortis vitae, condimentum
                  justo...</a
                >
                2.11.2014
              </li>
              <li class="list-group-item text-right">
                <a href="#" class="pull-left"
                  >For therepien massaortor. A lobortis vitae, condimentum
                  justo...</a
                >
                2.11.2014
              </li>
              <li class="list-group-item text-right">
                <a href="#" class="pull-left"
                  >Also we, havesapien massaortor. A lobortis vitae, condimentum
                  justo...</a
                >
                2.11.2014
              </li>
              <li class="list-group-item text-right">
                <a href="#" class="pull-left"
                  >Swedish chef is assaortor. A lobortis vitae, condimentum
                  justo...</a
                >
                2.11.2014
              </li>
            </ul>
          </div>
          <!--/tab-pane-->
          <div class="tab-pane" id="settings">
            <hr />
            <form class="form" action="##" method="post" id="registrationForm">
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="first_name"> <h4>First name</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    id="first_name"
                    placeholder="first name"
                    title="enter your first name if any."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="last_name"> <h4>Last name</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="last_name"
                    id="last_name"
                    placeholder="last name"
                    title="enter your last name if any."
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="phone"> <h4>Phone</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    id="phone"
                    placeholder="enter phone"
                    title="enter your phone number if any."
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="mobile"> <h4>Mobile</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="mobile"
                    id="mobile"
                    placeholder="enter mobile number"
                    title="enter your mobile number if any."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="email"> <h4>Email</h4></label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="you@email.com"
                    title="enter your email."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="email"> <h4>Location</h4></label>
                  <input
                    type="email"
                    class="form-control"
                    id="location"
                    placeholder="somewhere"
                    title="enter a location"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="password"> <h4>Password</h4></label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    placeholder="password"
                    title="enter your password."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="password2"> <h4>Verify</h4></label>
                  <input
                    type="password"
                    class="form-control"
                    name="password2"
                    id="password2"
                    placeholder="password2"
                    title="enter your password2."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-12">
                  <br />
                  <button class="btn btn-lg btn-success" type="submit">
                    <i class="glyphicon glyphicon-ok-sign"></i> Save
                  </button>
                  <button class="btn btn-lg" type="reset">
                    <i class="glyphicon glyphicon-repeat"></i> Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!--/tab-pane-->
      </div>
      <!--/tab-content-->
    </div>
    <!--/col-9-->
  </div>
  <!--/row-->
</template>
<script>
export default {
  name: "GuidePage",

  data() {
    return {
      acc: [],
    };
  },
  created() {
    fetch("http://localhost:3002/userquery", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: sessionStorage.getItem("id") }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        this.acc = data.res;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
