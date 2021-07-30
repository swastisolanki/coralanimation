var paths=[
{ id: '#path1',  d: "M 236.01 109.9 188.44 130.03 211.61 76.35 236.01 109.9 z"},
{ id: '#path2',  d: "M 236.01 109.9 228.69 181.26 188.44 130.03 236.01 109.9 z"},
{ id: '#path3',  d: "M 228.69 181.26 192.71 213.59 188.44 130.03 228.69 181.26 z"},
{ id: '#path4',  d: "M 362.27 156.86 305.55 213.59 289.69 164.18 362.27 156.86 z"},
{ id: '#path5',  d: "M 174.94 264.21 151.84 330.09 126.22 264.21 174.94 264.21 z"},
{ id: '#path6',  d: "M 174.98 264.12 174.94 264.21 126.22 264.21 157.33 213.59 174.98 264.12 z"},
{ id: '#path7',  d: "M 192.71 213.59 174.98 264.12 157.33 213.59 192.71 213.59 z"},
{ id: '#path8',  d: "M 305.55 213.59 151.84 330.09 174.94 264.21 175.02 264.21 174.98 264.12 192.71 213.59305.55 213.59 z"},
{ id: '#path9',  d: "M 305.55 213.59 192.71 213.59 289.69 164.18 305.55 213.59 z"},
{ id: '#path10',  d: "M 289.69 164.18 192.71 213.59 228.69 181.26 289.69 164.18 z"},
{ id: '#path11',  d: "M 59.74 69.03 8.5 78.79 0.57 31.82 59.74 69.03 z"},
{ id: '#path12',  d: "M 151.84 330.09 90.23 330.09 82.31 274.58 151.84 330.09 z"},
{ id: '#path13',  d: "M 119.51 211.15 21.92 161.74 8.5 78.79 119.51 211.15 z"},
{ id: '#path14',  d: "M 119.51 211.15 8.5 78.79 59.74 69.03 119.51 211.15 z"},
{ id: '#path15',  d: "M 135.37 171.5 119.51 211.15 59.74 69.03 106.06 131.79 106.06 131.8 135.37 171.5"},
{ id: '#path16',  d: "M 126.22 264.21 82.31 274.58 119.51 211.15 126.22 264.21 z"},
{ id: '#path17',  d: "M 151.84 330.09 82.31 274.58 126.22 264.21 151.84 330.09 z"},
{ id: '#path18',  d: "M 119.51 211.15 82.31 274.58 21.92 161.74 119.51 211.15 z"},
{ id: '#path19',  d: "M 110.36 1.33 107.47 89.22 106.06 131.79 59.74 69.03 110.36 1.33 z"},
{ id: '#path20',  d: "M 171.36 89.16 106.06 131.8 106.06 131.79 107.47 89.22 171.36 89.16 z"}
];






var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

paths.forEach(function(path, index) {
  timeline
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 1000,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});

timeline
  .add({
    targets: 'path:first-child',
    opacity: {
      value: 1,
      duration: 1000,
      easing: 'easeInOutQuad'
    },
    offset: 2000 + 10 * paths.length
  });

///////////slider

var slider = document.getElementById("fill");
var output = document.getElementById("fill");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

$('#fill').on('input', function() {
    $('#path').css('fill', $(this).val());
});

slider.oninput = function() {
  output.innerHTML = this.value;
}


/////////filter

//$('#contrast').on('input', function() {
 //   $('#path').css('opacity', //$(this).val());
//});
