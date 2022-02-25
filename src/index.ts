import axios from "axios";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT;

// Подключение к БД
mongoose.connect(process.env.MONGO_URL as string);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/save_advt", (req, res) => {
  const advt = {
    advt_id: 1111,
    title: "title",
    brand: "title",
    model: "title",
    generation: "title",
    description: "title",
    date_create: 2222,
    date_modify: 3333,
    state: "title",
    status: "title",
    status_parse: "title",
    price_byn: 44444,
    price_usd: 55555,
    city: "title",
    year: 66666,
    gearbox: "title",
    volume: 777777,
    fuel: "title",
    kilometers: 88888,
    carcase: "title",
    drive: "title",
    color: "title",
    phones: ["345345353"],
    owner: "title",
    vin_status: true,
    exchange: true,
    images: ["sdfsdfsdf"],
    is_private: true,
    alloy_wheels: true,
    roof_rails: true,
    tow_bar: true,
    abs: true,
    esp: true,
    anti_slip: true,
    immobilizer: true,
    signaling: true,
    rain_sensor: true,
    behind_camera: true,
    parking_sensors: true,
    control_dead_zones: true,
    front_airbags: true,
    side_airbags: true,
    behind_airbags: true,
    interior_color: "title",
    interior_material: "title",
    panoramic_view: true,
    luke: true,
    version_7: true,
    auto_start: true,
    cruise_control: true,
    wheel_multimedia: true,
    power_seats: true,
    front_power_windows: true,
    behind_power_windows: true,
    seat_heating: true,
    heated_windshield: true,
    heated_mirrors: true,
    wheel_heating: true,
    Heater: true,
    climate_control: true,
    air_conditioner: true,
    aux: true,
    bluetooth: true,
    cd_mp3: true,
    usb: true,
    multimedia_screen: true,
    regular_navigation: true,
    xenon_headlights: true,
    fog_lights: true,
    led_headlights: true,
  };

  axios
    .post("http://localhost:8011/notify", { advt })
    .catch((err) => console.log(err));

  res.sendStatus(200);
});

app.listen(port, () =>
  console.log(`Autohunt server is listening on ${port}: ${new Date()}`)
);
