"use strict";

// console.log('Hello!');
// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });
$(document).ready(function () {
  $('.assignmentCard--Toggle').click(function (e) {
    e.preventDefault();
    $('.assignmentCard-read').toggleClass('active');
    $('.assignmentCard-reply').toggleClass('active');
  }); // $('assignmentCard-reply--Toggle').click(function (e) { 
  //   e.preventDefault();
  // });
});
//# sourceMappingURL=all.js.map
