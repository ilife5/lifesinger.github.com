

// 每个月引入的用户数
var newUserCounts = [
  5000, 5000, 5000, 5000, 5000, 5000,
  5000, 5000, 5000, 5000, 5000, 5000
];
var defaultNewUserCount = 0;


// 用户类型，目前分三类用户
var userTypes = [
  // 留存 50％，在留存下来的用户里，有 50％ 用户会邀请新用户，平均每人邀请 15 人
  { stayRate: 0.5, inviteRate: 0.5, inviteTimes: 15 },
  { stayRate: 0.3, inviteRate: 0.3, inviteTimes: 10 },
  { stayRate: 0.2, inviteRate: 0.2, inviteTimes: 5 }
];


function calc() {

  var out = [];
  var users = [[0, 0, 0], [0, 0, 0]];

  // 36 months
  for(var i = 2; i < 38; i++) {
    var intro = newUserCounts[i - 2] || defaultNewUserCount;
    var newbie = intro + getInvitedUsers(diff(users[i - 2], users[i - 1]));

    users[i] = getRemainUsers(typify(newbie), users[i - 1]);

    out.push([
      intro, newbie,
      sum(users[i]), users[i][0], users[i][1], users[i][2]
    ]);
  }

  return out;
}


function diff(arr1, arr2) {
  return [
    arr2[0] - arr1[0],
    arr2[1] - arr1[1],
    arr2[2] - arr1[2]
  ];
}


function getInvitedUsers(newRemains) {
  var ret = 0;

  for (var i = 0; i < 3; i++) {
    var remain = newRemains[i];
    var inviteRate = userTypes[i].inviteRate;
    var inviteTimes = userTypes[i].inviteTimes;

    ret += remain * inviteRate * inviteTimes;
  }

  return ret;
}


function getRemainUsers(newbieCounts, remainCounts) {
  var ret = [];

  for (var i = 0; i < 3; i++) {
    ret[i] = newbieCounts[i] * userTypes[i].stayRate + remainCounts[i];
  }

  return ret;
}


function typify(count) {
  var times = 5;
  var x = count / (1 + times + times * times);

  // 一类用户数为 x，二类用户数为 5x，三类用户数为 25x
  return [
    x,
    times * x,
    times * times * x
  ];
}


function sum(arr) {
  var ret = 0;
  for (var i = 0; i < arr.length; i++) {
    ret += arr[i];
  }
  return ret;
}
