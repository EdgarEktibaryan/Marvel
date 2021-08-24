
// var matrix = [
//     [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
//     [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 5, 1, 1, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
// ];

// var matrix = matrixcreate(35, 35)
var matrix = [];

var m = 35;
var n = 35;
var e = [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 5, 0, 3, 0, 3, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 0, 0, 0, 4, 4, 0, 4, 0, 0, 4];
for (var a = 0; a < m; a++) {
    matrix.push([])
    for (var b = 0; b < n; b++) {
        var c = Math.floor(Math.random() * e.length);
        matrix[a].push(e[c]);
    }
}



var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var hulkArr = [];

function setup() {
    frameRate(5);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y)
                xotakerArr.push(gish)
            }
            else if (matrix[y][x] == 4) {
                var md = new Mard(x, y)
                mardArr.push(md)
            }
            else if (matrix[y][x] == 5) {
                var hk = new Hulk(x, y)
                hulkArr.push(hk)
            }
        }
    }

    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac");
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac")
            }
            else if (matrix[y][x] == 1) {
                fill("#3ADF10");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("brown");
            }
            else if (matrix[y][x] == 5) {
                fill("#275D19");
            }

            rect(x * side, y * side, side, side)
            // fill("blue")
            // text(x + "" + y, x * side + side / 2, y * side + side / 2)
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()

    }

    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in mardArr) {
        mardArr[i].eat()
        mardArr[i].move()
        mardArr[i].mult()
        mardArr[i].die()
    }
    for (var i in hulkArr) {
        hulkArr[i].eat1()
        hulkArr[i].eat2()
        hulkArr[i].eat3()
        hulkArr[i].move()
        hulkArr[i].mult()
        hulkArr[i].die()
    }

}


function matrixcreate(m, n) {
    var matrix = [];
    for (var i = 0; i < m; i++) {
        matrix.push([])
        for (var j = 0; j < n; j++) {


            var x = Math.floor((Math.random() * 6) + 0);

            matrix[i].push(x)
        }
    }
    return matrix;
}
