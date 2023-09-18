import { createSignal, onMount, onCleanup } from 'solid-js';
import { GoogleMap, Marker } from '@react-google-maps/api';

function Maps() {
  let map;
  let markers = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    const address = event.target.elements.address.value;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const location = results[0].geometry.location;
        map.setCenter(location);

        const request = {
          location,
          radius: 5000, // Adjust the radius as needed
          type: 'book_store' // Specify the type as 'book_store'
        };

        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            markers.forEach((marker) => {
              marker.setMap(null);
            });
            markers = [];

            results.forEach((place) => {
              const marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: place.name
              });
              markers.push(marker);
            });
          }
        });
      }
    });
  };

  onMount(() => {
    const myLatLng = { lat: -30.0277, lng: -51.2287 };
    map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 8
    });
  });

  onCleanup(() => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    console.log("CLEANING UP!");
  });

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Livrarias Perto de Você
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua Cidade ou Endereço</label>
                <input type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Porto Alegre" required="" />
              </div>
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Procurar Livrarias</button>
            </form>
          </div>
        </div>
        <br />
        <div
          id="map"
          style={{
            height: "300px",
            width: "1000px"
          }}
        ></div>
      </div>
    </section>
  );
}

export default Maps;
