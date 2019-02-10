/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/


var CONFIG = {
   customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: "http://192.168.1.68:8123",
   wsUrl: "ws://192.168.1.68:8123/api/websocket",
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   debug: false, // Prints entities and state change info to the console.

   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         padding: '20px 30px 30px 30px',
         fontSize: '28px'
      },
      right: [
        {
           type: HEADER_ITEMS.WEATHER,
           styles: {
              margin: '0 0 0'
           },
           icon: '&sensor.dark_sky_icon.state',
           icons: {
              'clear-day': 'clear',
              'clear-night': 'nt-clear',
              'cloudy': 'cloudy',
              'rain': 'rain',
              'sleet': 'sleet',
              'snow': 'snow',
              'wind': 'hazy',
              'fog': 'fog',
              'partly-cloudy-day': 'partlycloudy',
              'partly-cloudy-night': 'nt-partlycloudy'
           },
           fields: {
              summary: '&sensor.dark_sky_summary.state',
              temperature: '&sensor.dark_sky_temperature.state',
              temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
           }
        }
      ],
      left: [
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         }
      ]
   },

   /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 300, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/bg1.jpeg' },
         {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: 'Welcome to the <b>TileBoard</b>',
                  styles: { fontSize: '40px' }
               }
            ]
         },
         { bg: 'images/bg3.jpg' }
      ]
   },*/

   pages: [
      {
         title: '环境',
         bg: 'images/bg2.png',
         icon: 'mdi-weather-cloudy',
         groups: [
            {
               title: '天气',
               width: 2,
               height: 3,
               items: [
                  {
                     // please read README.md for more information
                     // this is just an example
                     position: [0, 0],
                     height: 2, // 1 for compact
                     //classes: ['-compact'],
                     type: TYPES.WEATHER,
                     id: {},
                     title: '大兴黄村',
                     state: '&sensor.dark_sky_summary.state', // https://github.com/resoai/TileBoard/wiki/Anonymous-functions
                     icon: '&sensor.dark_sky_icon.state',
                     icons: {
                        'clear-day': 'clear',
                        'clear-night': 'nt-clear',
                        'cloudy': 'cloudy',
                        'rain': 'rain',
                        'sleet': 'sleet',
                        'snow': 'snow',
                        'wind': 'hazy',
                        'fog': 'fog',
                        'partly-cloudy-day': 'partlycloudy',
                        'partly-cloudy-night': 'nt-partlycloudy'
                     },
                     fields: {
                        summary: '&sensor.waqi_huangcunzhen_daxing_beijing.state',
                        temperature: '&sensor.dark_sky_temperature.state',
                        temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
                        windSpeed: '&sensor.caiyun_wind_speed.state',
                        windSpeedUnit: '&sensor.caiyun_wind_speed.attributes.unit_of_measurement',
                        humidity: '&sensor.caiyun_humidity.state',
                        humidityUnit: '%',
                        list: [
                           '&sensor.dark_sky_summary_0.state',
                           '气温 ' 
                              + '&sensor.dark_sky_overnight_low_temperature_0.state' + ' ~ '
                              + '&sensor.dark_sky_daytime_high_temperature_0.state'
                              + '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
                           '能见度 ' 
                              + '&sensor.dark_sky_visibility.state' 
                              + '&sensor.dark_sky_visibility.attributes.unit_of_measurement',
                            /*'紫外线强度 '
                              + '&sensor.dark_sky_uv_index.state' + ' 级',*/
                            '降水概率 '
                              + '&sensor.dark_sky_precip_probability.state' + '%'
                           /*
                           'Feels like '
                              + '&sensor.dark_sky_apparent_temperature.state'
                              + '&sensor.dark_sky_apparent_temperature.attributes.unit_of_measurement',

                           'Pressure '
                              + '&sensor.dark_sky_pressure.state'
                              + '&sensor.dark_sky_pressure.attributes.unit_of_measurement',

                           '&sensor.dark_sky_precip_probability.state'
                              + '&sensor.dark_sky_precip_probability.attributes.unit_of_measurement'
                              + ' chance of rain'
                           */
                        ]
                     }
                  },
                  /*空气质量*/
                  {
                    position:[1,0],
                    type: TYPES.SENSOR,
                    title: function(item, entity){
                      title = "优";
                      if(entity.state > 300){
                        title = "严重污染";
                      }else if(entity.state > 200){
                        title = "重度污染";
                      }else if(entity.state > 150){
                        title = "中度污染";
                      }else if(entity.state > 100){
                        title = "轻度污染";
                      }else if(entity.state > 50){
                        title = "空气良好";
                      }
                      return title;
                    },
                    id: 'sensor.waqi_huangcunzhen_daxing_beijing',
                    unit: '&sensor.waqi_huangcunzhen_daxing_beijing.attributes.unit_of_measurement',
                    state: false,
                    customStyles: function(item, entity){
                      color = "#99CC66";
                      if(entity.state > 300){
                        color = "#330000";
                      }else if(entity.state > 200){
                        color = "#663366";
                      }else if(entity.state > 150){
                        color = "#990033";
                      }else if(entity.state > 100){
                        color = "#cc9999";
                      }else if(entity.state > 50){
                        color = "#cccc99";
                      }
                      return {'background-color': color };
                    }
                  },
                  /*天气预报*/
                  {
                     position: [0, 2],
                     type: TYPES.WEATHER_LIST,
                     width: 2,
                     height: 1,
                     title: '&sensor.dark_sky_daily_summary.state',
                     id: {},
                     icons: {
                        'clear-day': 'clear',
                        'clear-night': 'nt-clear',
                        'cloudy': 'cloudy',
                        'rain': 'rain',
                        'sleet': 'sleet',
                        'snow': 'snow',
                        'wind': 'hazy',
                        'fog': 'fog',
                        'partly-cloudy-day': 'partlycloudy',
                        'partly-cloudy-night': 'nt-partlycloudy'
                     },
                     hideHeader: false,
                     secondaryTitle: 'Wind',
                     list: [1,2,3].map(function (id) {
                        var forecast = "&sensor.dark_sky_overnight_low_temperature_" + id + ".state ~ ";
                        forecast += "&sensor.dark_sky_daytime_high_temperature_" + id + ".state";
                        forecast += "&sensor.dark_sky_daytime_high_temperature_" + id + ".attributes.unit_of_measurement";

                        var wind = "&sensor.dark_sky_wind_speed_" + id + ".state";
                        wind += " &sensor.dark_sky_wind_speed_" + id + ".attributes.unit_of_measurement";

                        return {
                           date: function () {
                              //var d = new Date(Date.now() + id * 24 * 60 * 60 * 1000);
                              //return d.toString().split(' ').slice(1, 3).join(' ');
                              //return "" + d.getMonth() + "-" + d.getDate();
                              str = ['今天','明天','后天','大后天'];
                              return str[id];
                           },
                           icon: "&sensor.dark_sky_icon_" + id + ".state",
                           //iconImage: null, replace icon with image
                           primary: forecast,
                           secondary: wind
                        }
                     })
                  }

               ]
            },
            {
              title: '室内',
              width: 2,
              height: 3,
              items:[
                {
                  position: [0,0],
                  type: TYPES.SENSOR,
                  title: '客厅',
                  id: 'sensor.temperature_158d00020f250d',
                  state: '&sensor.humidity_158d00020f250d.state' + '%',
                  unit: '°C'
                },
                {
                  position: [1,0],
                  type: TYPES.SENSOR,
                  title: '南卧室',
                  id: 'sensor.temperature_158d00020f250d',
                  state: '&sensor.humidity_158d00020f250d.state' + '%',
                  unit: '°C'
                },
                {
                  position: [0,1],
                  type: TYPES.SENSOR,
                  title: '北卧室',
                  id: 'sensor.temperature_158d0002024629',
                  state: '&sensor.humidity_158d0002024629.state' + '%',
                  unit: '°C'
                }
              ]
            }
         ]
      },
      {
         title: '控制',
         bg: 'images/bg1.jpeg',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               title: '客厅',
               width: 1,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     id: "climate.livingroom_ac",
                     title: "空调",
                     type: TYPES.CLIMATE,
                     unit: '°C',
                     state: function (item, entity) {
                        return '当前 '
                           + entity.attributes.current_temperature
                           + ' °C';
                     }
                  },
                  {
                     position: [0, 1],
                     type: TYPES.FAN,
                     title: '空气净化器',
                     subtitle: function(item, entity){
                        if(entity.attributes.mode!='idle'){
                          return '空气质量 '+entity.attributes.aqi;
                        }
                     },
                     id: 'fan.living_room_air_purifier',
                     state: '&fan.living_room_air_purifier.state',
                     icons: {'off':'mdi-fan-off', 'on':'mdi-fan'}
                  }
               ]
            },

            {
               title: '南卧室',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: "switch.wall_switch_158d00022eccdd",
                     //id: {state: 'off'}, // replace it with real string id (e.g. "switch.lights")
                     state: '&switch.wall_switch_158d00022eccdd.state',
                     title: '吊灯',
                     icons: {'off': 'mdi-lightbulb-outline', 'on': 'mdi-lightbulb-on-outline'}
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: "light.nan_wo_chuang_tou_deng",
                     //id: {state: 'off'}, // replace it with real string id (e.g. "switch.lights")
                     state: '&light.nan_wo_chuang_tou_deng.state',
                     title: '床头灯',
                     icons: {'off': 'mdi-lightbulb-outline', 'on': 'mdi-lightbulb-on-outline'}
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: "light.worklight",
                     //id: {state: 'off'}, // replace it with real string id (e.g. "switch.lights")
                     state: '&light.worklight.state',
                     title: '工作灯',
                     icons: {'off': 'mdi-lightbulb-outline', 'on': 'mdi-lightbulb-on-outline'},
                     sliders: [
                      {
                         title: '亮度',
                         field: 'brightness',
                         max: 255,
                         min: 0,
                         step: 5,
                         request: {
                            type: "call_service",
                            domain: "light",
                            service: "turn_on",
                            field: "brightness"
                         }
                      },
                      {
                         title: '色温',
                         field: 'color_temp',
                         max: 588,
                         min: 153,
                         step: 15,
                         request: {
                            type: "call_service",
                            domain: "light",
                            service: "turn_on",
                            field: "color_temp"
                         }
                      }
                    ]
                  },
                  {
                     position: [1, 1],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: "switch.audiosystem",
                     //id: {state: 'off'}, // replace it with real string id (e.g. "switch.lights")
                     state: '&switch.audiosystem.state',
                     title: '音箱',
                     icons: {'off': 'mdi-speaker', 'on': 'mdi-speaker-wireless'}
                  },
                  {
                     position: [0, 2],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: "switch.audiosystem_usb",
                     //id: {state: 'off'}, // replace it with real string id (e.g. "switch.lights")
                     state: '&switch.audiosystem_usb.state',
                     title: 'USB充电',
                     icons: {'off': 'mdi-power-off', 'on': 'mdi-power'}
                  },
                  {
                     position: [1, 2],
                     id: "climate.bedroom_ac",
                     title: "空调",
                     type: TYPES.CLIMATE,
                     unit: '°C',
                     lstates: {
                        Off: "关",
                        Cool: "制冷",
                        Heat: "制热",
                        Auto: "自动",
                        Dehumidify: "除湿",
                        Ventilate: "送风"
                     },
                     fan_mode:[
                        {
                          title: '风速',
                          field: 'fan_mode',
                        }
                      ],
                     state: function (item, entity) {
                        return '当前 '
                           + entity.attributes.current_temperature
                           + ' °C';
                     }
                  }

               ]
            },

            {
               title: '北卧室',
               width: 1,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: "switch.wall_switch_158d00022e90c0",
                     //id: {state: 'off'}, // replace it with real string id (e.g. "switch.lights")
                     state: '&switch.wall_switch_158d00022e90c0.state',
                     title: '吊灯',
                     icons: {'off': 'mdi-lightbulb-outline', 'on': 'mdi-lightbulb-on-outline'}
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: "switch.wall_switch_158d00020d74e9",
                     //id: {state: 'off'}, // replace it with real string id (e.g. "switch.lights")
                     state: '&light.wall_switch_158d00020d74e9.state',
                     title: '阳台灯',
                     icons: {'off': 'mdi-lightbulb-outline', 'on': 'mdi-lightbulb-on-outline'}
                  },
                  {
                     position: [0, 2],
                     id: "climate.northroom_ac",
                     title: "空调",
                     type: TYPES.CLIMATE,
                     unit: '°C',
                     state: function (item, entity) {
                        return '当前 '
                           + entity.attributes.current_temperature
                           + ' °C';
                     }
                  },
                  {
                     position: [0, 3],
                     type: TYPES.FAN,
                     title: '空气净化器',
                     subtitle: function(item, entity){
                        if(entity.attributes.mode!='idle'){
                          return '空气质量 '+entity.attributes.aqi;
                        }
                     },
                     id: 'fan.north_room_air_purifier',
                     state: '&fan.north_room_air_purifier.state',
                     icons: {'off':'mdi-fan-off', 'on':'mdi-fan'}
                  }
               ]
            }
         ]
      }
      
   ],
}
