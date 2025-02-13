function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 done");
    callback();
  }, 1000);
}
function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 done");
    callback();
  }, 2000);
}
function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 done");
    callback();
  }, 3000);
}
function step4(callback) {
  setTimeout(() => {
    console.log("Step 4 done");
    callback();
  }, 4000);
}
function step5(callback) {
  setTimeout(() => {
    console.log("Step 5 done");
    callback();
  }, 5000);
}
step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        step5(() => {
          console.log("All doomsteps done");
        });
      });
    });
  });
});
