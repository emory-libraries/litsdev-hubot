/*
*
* Description
*   A hubot script to alert for inclement weather
*
* Configuration:
*   HUBOT_FORECAST_KEY
*   HUBOT_LAT_LNG
*   HUBOT_FORECAST_ROOM
*
* Commands:
*   none
*
* Notes:
*   This script sets up automated alerts, and rquires only that the
*   necessary EnvVars be set. See the README for details.
*
* Author:
*   farski
*   jeffbyrnes
*
*/



var KV_KEY, LOCATION;

KV_KEY = 'forecast-alert-datapoint';

LOCATION = process.env.HUBOT_LAT_LNG;

module.exports = function(robot) {
  var fetchForecast, forecast, handleClear, handleContinuingWeather, handleJSON, handleNewWeather, handleWeather, postWeatherAlert;
  
  // This function posts an alert about the current forecast data always. It
  // doesn't determine if the alert should be posted.
  
  postWeatherAlert = function(json, callback) {
    var dataPoint, dataPoints, dataPointsWithPrecipitation, date, delta, hightIntensity, hightProbability, intensity, mostIntenseDataPoint, mostProbableDataPoint, msg, now, postMessage, probability, timestamp, _delay, _i, _intensity, _len, _link, _minutes, _now, _percent;
    postMessage = callback;
    now = new Date();
    dataPoints = json['minutely']['data'];
    dataPointsWithPrecipitation = [];
    mostIntenseDataPoint = {};
    mostProbableDataPoint = {};
    for (_i = 0, _len = dataPoints.length; _i < _len; _i++) {
      dataPoint = dataPoints[_i];
      intensity = dataPoint['precipIntensity'] || 0;
      probability = dataPoint['precipProbability'] || 0;
      if (intensity > 0) {
        dataPointsWithPrecipitation.push(dataPoint);
        hightIntensity = mostIntenseDataPoint['precipIntensity'] || 0;
        if (intensity > hightIntensity) {
          mostIntenseDataPoint = dataPoint;
        }
        hightProbability = mostProbableDataPoint['precipProbability'] || 0;
        if (probability > hightProbability) {
          mostProbableDataPoint = dataPoint;
        }
      }
    }
    _minutes = dataPointsWithPrecipitation.length;
    probability = mostProbableDataPoint['precipProbability'];
    _percent = Math.round(probability * 100);
    intensity = mostIntenseDataPoint['precipIntensity'];
    if (intensity >= 0.4) {
      _intensity = 'heavy';
    } else if (intensity >= 0.1) {
      _intensity = 'moderate';
    } else if (intensity >= 0.02) {
      _intensity = 'light';
    } else {
      _intensity = 'very light';
    }
    timestamp = mostIntenseDataPoint['time'];
    date = new Date(timestamp * 1000);
    delta = date - now;
    _delay = "" + (Math.round(delta / 60 / 1000));
    _now = new Date().getTime();
    _link = "http://forecast.io////f/" + LOCATION + "/" + (Math.round(_now / 1000));
    msg = "WEATHER: " + _percent + "% chance of inclement weather in the next hour for at least " + _minutes + " minutes. It will be worst in " + _delay + " minutes (" + _intensity + " precipitation). " + _link;
    return postMessage(msg, mostIntenseDataPoint);
  };
  handleClear = function(json, callback) {
    
    var alertDataPoint, alertIntensity, dataPoint, dataPoints, msg, postMessage;
    postMessage = callback;
    alertDataPoint = robot.brain.get(KV_KEY) || {};
    alertIntensity = alertDataPoint['precipIntensity'] || 0;
    
    if (alertIntensity === 0) {
      
      // This is where we end up most of the time (clear forecast currently
      // following a clear forecast previously); no need to do anything
      
      console.log('[Forecast] Continued clear weather.');
    } 
    
    else {
  
      // Forecast has cleared after a period of inclement weather; post a
      // notification (not checking time since last alert because this seems like
      // very important information, and should be posted regardless)

      console.log('[Forecast] Weather has cleared.');
      dataPoints = json['minutely']['data'];
      dataPoint = dataPoints[0];
      msg = 'WEATHER: The weather should be clear for at least an hour.';
      return postMessage(msg, dataPoint);
    }
  };
  handleNewWeather = function(json, callback) {
    var dataPoint, dataPoints, dataPointsWithPrecipitation, hightIntensity, intensity, isAnomaly, mostIntenseDataPoint, totalIntensity, _i, _len;
    isAnomaly = false;
    dataPointsWithPrecipitation = [];
    mostIntenseDataPoint = {};
    totalIntensity = 0;
    dataPoints = json['minutely']['data'];
    for (_i = 0, _len = dataPoints.length; _i < _len; _i++) {
      dataPoint = dataPoints[_i];
      intensity = dataPoint['precipIntensity'] || 0;
      totalIntensity += intensity;
      if (intensity > 0) {
        dataPointsWithPrecipitation.push(dataPoint);
        hightIntensity = mostIntenseDataPoint['precipIntensity'] || 0;
        if (intensity > hightIntensity) {
          mostIntenseDataPoint = dataPoint;
        }
      }
    }
    if (dataPointsWithPrecipitation.length < 5) {
      isAnomaly = true;
    }
    if (mostIntenseDataPoint['precipProbability'] < 0.20) {
      isAnomaly = true;
    }
    if (totalIntensity < (3 * mostIntenseDataPoint['precipIntensity'])) {
      isAnomaly = true;
    }
    if (!isAnomaly) {
      console.log('[Forecast] Posting alert for new inclement weather');
      return postWeatherAlert(json, callback);
    }
  };
  handleContinuingWeather = function(json, callback) {
    var alertDataPoint, alertIntensity, alertTime, dataPoint, dataPoints, dataPointsWithPrecipitation, hightIntensity, intensity, mostIntenseDataPoint, msg, now, postMessage, since, totalIntensity, trailingClearDataPoints, _i, _j, _len, _len1;
    now = new Date();
    postMessage = callback;
    alertDataPoint = robot.brain.get(KV_KEY) || {};
    alertIntensity = alertDataPoint['precipIntensity'] || 0;
    alertTime = alertDataPoint['__alertTime'];
    totalIntensity = 0;
    since = now - alertTime;
    if (since > (3 * 60 * 60 * 1000)) {
      console.log('[Forecast] Posting reminder alert');
      return postWeatherAlert(json, callback);
    } else {
      mostIntenseDataPoint = {};
      dataPointsWithPrecipitation = [];
      dataPoints = json['minutely']['data'];
      for (_i = 0, _len = dataPoints.length; _i < _len; _i++) {
        dataPoint = dataPoints[_i];
        intensity = dataPoint['precipIntensity'] || 0;
        totalIntensity += intensity;
        if (intensity > 0) {
          dataPointsWithPrecipitation.push(dataPoint);
          hightIntensity = mostIntenseDataPoint['precipIntensity'] || 0;
          if (intensity > hightIntensity) {
            mostIntenseDataPoint = dataPoint;
          }
        }
      }
      hightIntensity = mostIntenseDataPoint['precipIntensity'];
      if (hightIntensity > (2 * alertIntensity) && hightIntensity > 0.072) {
        
        // There's weather in the forecast that is at least twice as bad as the
        // weather was at the last alert so it's worth posting another alert

        
        console.log('[Forecast] Posting intensifying alert');
        postWeatherAlert(json, callback);
        return;
      }
      trailingClearDataPoints = [];
      dataPoints.reverse();
      for (_j = 0, _len1 = dataPoints.length; _j < _len1; _j++) {
        dataPoint = dataPoints[_j];
        intensity = dataPoint['precipIntensity'] || 0;
        if (intensity > 0) {
          break;
        }
        trailingClearDataPoints.push(dataPoint);
      }
      dataPoints.reverse();
      if (trailingClearDataPoints.length > 30) {
        
        // If at least the last 30 minutes of the current forecast is clear post
        // an alert about the break in the weather. The currently cached data
        // point is getting rolled over with this notification so that the cache
        // still represents bad weather
        
        console.log('[Forecast] Posting weather break alert');
        msg = 'WEATHER: There should be a break in the weather for at least 30 minutes within the hour.';
        return postMessage(msg, alertDataPoint);
      }
    }
  };
  handleWeather = function(json, callback) {
    var alertDataPoint, alertIntensity;
    alertDataPoint = robot.brain.get(KV_KEY) || {};
    alertIntensity = alertDataPoint['precipIntensity'] || 0;
    if (alertIntensity === 0) {
      return handleNewWeather(json, callback);
    } else {
      return handleContinuingWeather(json, callback);
    }
  };
  handleJSON = function(json, callback) {
    var dataPoint, dataPoints, totalIntensity, _i, _len;
    if (json['minutely']) {
      dataPoints = json['minutely']['data'] || [];
      if (dataPoints.length > 0) {
        totalIntensity = 0;
        for (_i = 0, _len = dataPoints.length; _i < _len; _i++) {
          dataPoint = dataPoints[_i];
          totalIntensity += dataPoint['precipIntensity'] || 0;
        }
        if (totalIntensity === 0) {
          return handleClear(json, callback);
        } else {
          return handleWeather(json, callback);
        }
      }
    }
  };
  fetchForecast = function(callback) {
    var base_url, exclude, forecastKey, url;
    forecastKey = process.env.HUBOT_FORECAST_KEY;
    exclude = 'hourly,daily,flags';
    base_url = "https://api.forecast.io/forecast/" + forecastKey + "/" + LOCATION;
    url = base_url + "?units=us&exclude=" + exclude;
    console.log("[Forecast] Requesting forecast data: " + url);
    return robot.http(url).get()(function(err, res, body) {
      var json;
      if (!err) {
        json = JSON.parse(body);
        return handleJSON(json, callback);
      }
    });
  };
  forecast = function() {
    var isBusinessHours, isWeekday, now, room;
    now = new Date();
    isWeekday = now.getDay() < 6;
    isBusinessHours = now.getUTCHours() >= 11 && now.getUTCHours() <= 23;
    if (isWeekday && isBusinessHours) {
      
       // Only run during business hours
      
      room = process.env.HUBOT_FORECAST_ROOM;
      return fetchForecast(function(msg, dataPoint) {
        
        // Cache the data point related to this alert and send the message to
        // the room
        
        dataPoint['__alertTime'] = now;
        robot.brain.set(KV_KEY, dataPoint);
        return robot.messageRoom(room, msg);
      });
    } else {
      
      // Remove the alert data cache between work days
      
      console.log('[Forecast] Sleeping');
      return robot.brain.remove(KV_KEY);
    }
  };
  console.log('[Forecast] Starting weather service...');
  setInterval(forecast, 5 * 60 * 1000);
  return forecast();
};
