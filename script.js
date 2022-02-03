var map;
var InforObj = [];
var image = {url: "https://example.com/assets/images/mapicon.png"}
/*
 here is infowindow title array
*/
const contentString = [
        ["<b style='font-weight: bold'>Vake Barnch</b><br>vake, street<br>Hours: monnday friday: 10:00-18:00"],
        ["<b style='font-weight: bold'>Lilo Barnch</b><br>Lilo, street<br>Hours: monnday friday: 10:00-18:00"],
    ];
    /*const locations = [
        [{ lat: 41.787623, lng: 44.773876 }, "WELMOTORS"],//თბილისი დიდი დიღომი
        [{ lat: 41.722724, lng: 44.966911 }, "WELMOTORS"],//თბილისი დიდი ლილო
        [{ lat: 42.157132, lng: 41.671476 }, "WELMOTORS"],//ფოთი ლარნაკას ქუჩა
        [{ lat: 42.190282, lng: 41.708663 }, "WELMOTORS"],//ფოთი სოფ. პატარა ფოთი
        [{ lat: 42.260117, lng: 42.712368 }, "WELMOTORS"],//ქუთაისი ნიკეას ქუჩა
    ];*/
/*
here is position and title onmouseover icon
*/
var markersOnMap = [{
		placeName: "SITE",
		LatLng: [{
			lat: 41.787623, lng: 44.773876
		}]
	},
	{
		placeName: "SITE",
		LatLng: [{
			lat: 41.722724, lng: 44.966911
		}]
	},
	{
		placeName: "SITE",
		LatLng: [{
			lat: 42.157132, lng: 41.671476
		}]
	},
	{
		placeName: "SITE",
		LatLng: [{
			lat: 42.190282, lng: 41.708663
		}]
	},
	{
		placeName: "SITE",
		LatLng: [{
			lat: 42.260117, lng: 42.712368
		}]
	}
];
window.onload = function () {
	initMap();
};
function addMarkerInfo() {
	for (var i = 0; i < markersOnMap.length; i++) {
		const marker = new google.maps.Marker({
			position: markersOnMap[i].LatLng[0],
			map: map,
			title: "WELMOTORS",
			icon: image,
		});
		const infowindow = new google.maps.InfoWindow({
			content: contentString[i][0],
			maxWidth: 200
		});
		marker.addListener('click', function () {
			closeOtherInfo();
			infowindow.open(marker.get('map'), marker);
			InforObj[0] = infowindow;
		});
	}
}
function closeOtherInfo() {
	if (InforObj.length > 0) {
		/* detach the info-window from the marker ... undocumented in the API docs */
		InforObj[0].set("marker", null);
		/* and close it */
		InforObj[0].close();
		/* blank the array */
		InforObj.length = 0;
	}
}
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
        center: { lat: 42.009139, lng: 43.371132 },
	});
	addMarkerInfo();
}

