var api_key = "186883141f89bdcf095f2646deaadae3"

function getCoord() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var units = "units=us";
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $.getJSON( "https://crossorigin.me/"+"https://api.forecast.io/forecast/" + api_key + "/" + lat + "," + lon + "?" + units, function(result) {
      var far = result['currently']['temperature'];
      document.getElementById('temp').innerHTML = far + "°F";
      $("#fahrenheit").click(function() {
        document.getElementById('temp').innerHTML = far + "°F";
        $("#celsius").show();
        $("#fahrenheit").hide();
      });

      $("#celsius").click(function(far) {
        var far = result['currently']['temperature'];
        var far = (far - 32) * 5 / 9;
        var far = far.toFixed(2);
        document.getElementById('temp').innerHTML = far + "°C";
        $("#celsius").hide();
        $("#fahrenheit").show();
      });

      var summary = result['currently']['summary'];
      document.getElementById('weather').innerHTML = summary;
      var city = result['timezone'];
      
      var icon = result['currently']['icon'];
      if (icon == "rain"){
        $('body').css({'background-image': 'url('+ "https://images2.alphacoders.com/180/180742.jpg"+')', 'position': 'center'});
      }  else if (icon == "clear-day"){
        $('body').css({'background-image': 'url('+ "https://www.zastavki.com/pictures/originals/2014/Nature___Seasons___Spring_Beautiful_mountain_spring_clear_day_068173_.jpg"+')', 'position': 'center'});
      } else if (icon == "clear-night"){
        $('body').css({'background-image': 'url('+ "https://i.imgur.com/HF3Xxg1.jpg"+')', 'position': 'center'});
      } else if (icon == "snow"){
        $('body').css({'background-image': 'url('+ "https://hdimagesnew.com/wp-content/uploads/2015/11/Snow-Wallpapers-0.jpg"+')', 'position': 'center'});
      } else if (icon == "sleet"){
        $('body').css({'background-image': 'url('+ "https://i.ytimg.com/vi/AhBFanbd6Ng/maxresdefault.jpg"+')', 'position': 'center'});
      } else if (icon == "wind"){
        $('body').css({'background-image': 'url('+ "https://cdn.pcwallart.com/images/wind-trees-wallpaper-4.jpg"+')', 'position': 'center'});
      } else if (icon == "fog"){
        $('body').css({'background-image': 'url('+ "https://feelgrafix.com/data_images/out/7/804675-fog-wallpapers.jpg"+')', 'position': 'center'});
      } else if (icon == "cloudy"){
        $('body').css({'background-image': 'url('+ "https://wallpaperscraft.com/image/road_field_clouds_cloudy_horizon_46240_2560x1600.jpg"+')', 'position': 'center'});
      } else if (icon == "partly-cloudy-day"){
        $('body').css({'background-image': 'url('+"https://afsheenanjum.files.wordpress.com/2014/05/clouds-wallpaper-4.jpg"+')', 'position': 'center'});
      } else if (icon == "partly-cloudy-night"){
        $('body').css({'background-image': 'url('+ "http://wallpapers-hd-wide.com/wp-content/uploads/2016/01/Beautiful-cloudy-night-full-moon-moonlight-1920x1080.jpg"+')', 'position': 'center'});
      }
    });
  });
};
$(document).ready(function() {
  getCoord();
});