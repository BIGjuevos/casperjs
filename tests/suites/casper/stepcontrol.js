casper.options.autostart = false;

function sleepFor( sleepDuration ){
  var now = new Date().getTime();
  while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}

/*
casper.test.begin('resume execution', 2, function(test) {
  casper.start('tests/site/index.html');

  var nsteps = casper.steps.length;

  casper.then(function() {
    test.assertTitle('CasperJS test index',
      'Casper.then() added a new step 1');
  });

  casper.then(function() {
    test.assertTitle('CasperJS test index',
      'Casper.then() added a new step 2');
  });

  casper.run(function() {
    console.log('run callback');

    test.done();
  });

  console.log('after run');

  casper.resumeExecution();
});
*/

casper.test.begin('step by step execution', 2, function(test) {
  casper.start('tests/site/index.html');

  var nsteps = casper.steps.length;

  casper.then(function() {
    test.assertTitle('CasperJS test index',
      'Casper.then() added a new step 1');
  });

  casper.then(function() {
    test.assertTitle('CasperJS test index',
      'Casper.then() added a new step 2');
  });

  casper.run(function() {
    console.log('run callback');

    test.done();
  });

  console.log('after run');

  casper.stepForward();

  console.log('do something between the steps, 5000ms');
  sleepFor(5000);

  casper.stepForward();

  console.log('do something after this step');

  casper.resumeExecution();
});
