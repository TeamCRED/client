app.controller('profile', function($scope, $http, $state, Auth, $location, $timeout, utils) {
    $scope.confetti = function(index) {
      if ($scope.questCompleted && index == 1) {
        $scope.yay = true;
        confetti();
        $timeout(function() {
            $scope.yay = false;
        }, 4500)
      }
    }
    $('.tooltipped').tooltip('remove');
    $('.tooltipped').tooltip({delay: 50});
    $scope.questCompleted = JSON.parse(localStorage.getItem('quest'));
    var redirect = JSON.parse(localStorage.getItem('redirect'));
    if ($scope.questCompleted && redirect) {
      localStorage.setItem('redirect', 'false');
      $timeout(function () {
        $scope.confetti(1);
      },500)
    }
    $scope.yay = false;
    var server = utils.server;
    var award = utils.server + 'awards';
    $scope.user = Auth.getUser();
    $scope.batchRedirect = function() {
        $location.path('/dashboard/your-brew?beer_id=white-rascal&tank=B4')
    }
    if (!$scope.user) {
        $state.go('dashboard.login');
    } else {
        $scope.loading = true;

        $http.get(server + 'awards', {
                headers: {
                    "Authorization": "Bearer " + localStorage.token,
                }
            })
            .then(function(result) {
                $scope.awards = result.data;
                if($scope.awards.length > 0 && $scope.awards[0].id != 1) {
                  for (var i = 0; i < $scope.awards.length; i++) {
                    if($scope.awards[i].id == 1) {
                      var ipa = $scope.awards[i];
                      $scope.awards.splice(i, 1);
                      $scope.awards.unshift(ipa);
                      break;
                    }
                  }
                }

                if ($scope.questCompleted && $scope.awards.length == 4) {
                  $scope.awards.unshift({awesome: true})
                }
                $scope.loading = false;
            });

        $http.get(server + 'batches/' + $scope.user.id)
            .then(function(result) {
                $scope.batches = result.data;
                $scope.batches.forEach(function(batch) {
                    $http.get(server + 'beer/' + batch.beer_id).then(function(result) {
                        batch.beer = result.data;
                    });
                });
            });

        $http.get(server + 'employees/' + $scope.user.id)
            .then(function(result) {
                $scope.employees = result.data;
            });
    }
    $http.get(server + 'buddies/' + $scope.user.id)
    .then(function (result) {
      $scope.buddies = result.data;
    });
    $http.get(server + 'points/' + $scope.user.id)
        .then(function(result) {
            $scope.points = result.data;
        });
});


function confetti() {

  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  particle = [];
  particleCount = 0,
    gravity = 0.3,
    colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
      '#FF5722', '#795548'
    ];

  for (var i = 0; i < 300; i++) {

    particle.push({
      x: width / 2,
      y: height / 2,
      boxW: randomRange(5, 20),
      boxH: randomRange(5, 20),
      size: randomRange(2, 8),

      spikeran: randomRange(3, 5),

      velX: randomRange(-8, 8),
      velY: randomRange(-50, -10),

      angle: convertToRadians(randomRange(0, 360)),
      color: colors[Math.floor(Math.random() * colors.length)],
      anglespin: randomRange(-0.2, 0.2),

      draw: function() {


        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.fillStyle = this.color;
        context.beginPath();
        // drawStar(0, 0, 5, this.boxW, this.boxH);
        context.fillRect(this.boxW / 2 * -1, this.boxH / 2 * -1, this.boxW, this.boxH);
        context.fill();
        context.closePath();
        context.restore();
        this.angle += this.anglespin;
        this.velY *= 0.999;
        this.velY += 0.3;

        this.x += this.velX;
        this.y += this.velY;
        if (this.y < 0) {
          this.velY *= -0.2;
          this.velX *= 0.9;
        };
        if (this.y > height) {
          this.anglespin = 0;
          this.y = height;
          this.velY *= -0.2;
          this.velX *= 0.9;
        };
        if (this.x > width || this.x < 0) {

          this.velX *= -0.5;
        };



      },




    });

  }
  r1 = {
    x: width / 2 - 250,
    y: height / 2 - 200,
    width: 300,
    height: 300,
    velX: 0,
    velY: -10,
    img: loadImage("../../assets/quest-completed.jpg"),
    alphatop: 0
  };


  function drawScreen() {
    size = 50;
    if (r1.alphatop < 1) {
      r1.alphatop += 0.01;
    } else {
      r1.alphatop = 1;
    }
    context.globalAlpha = r1.alphatop;
    context.drawImage(r1.img, r1.x, r1.y);

    context.globalAlpha = 1;
    for (var i = 0; i < particle.length; i++) {
      particle[i].draw();

    }
  }

  function loadImage(url) {
    var img = document.createElement("img");
    img.src = url;
    return img;
  }

  function update() {

    context.clearRect(0, 0, width, height);

    drawScreen();

    requestAnimationFrame(update);
  }

  update();


  function randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  function convertToRadians(degree) {
    return degree * (Math.PI / 180);
  }

  function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    context.strokeSyle = "#000";
    context.beginPath();
    context.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      context.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      context.lineTo(x, y)
      rot += step
    }
    context.lineTo(cx, cy - outerRadius)
    context.closePath();
    context.fillStyle = color;
    context.fill();

  }
}
