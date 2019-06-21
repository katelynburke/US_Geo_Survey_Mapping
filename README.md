## Visualizing USGS Earthquake Data

#### Overview:
In this project, I created a map that visualizes earthquakes that occur in the U.S. based on a live API feed (updated every 5 minutes) provided by the United States Geological Survey, or USGS for short. The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change.

The map I created includes data markers that reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color. The map also includes popups that provide additional information about the earthquake when a marker is clicked and a lengend that provides context for the map data. 

#### Technology used: 
* Leaflet.js
* HTML/CSS
* Bootstrap
* GeoJSON

#### Data sources used: 
* https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

![usgs_logo](https://github.com/katelynburke/US_Geo_Survey_Mapping/blob/master/Images/usgs_logo.png)

#### Final map images: 
The map plots all of the earthquakes from the dataset based on their longitude and latitude. Each earthquake marker gives more information about the earthquake that has occurred. 

![final_map_1](https://github.com/katelynburke/US_Geo_Survey_Mapping/blob/master/Images/final_map_image.png)
![final_map_2](https://github.com/katelynburke/US_Geo_Survey_Mapping/blob/master/Images/map_image_2.png)
![legend](https://github.com/katelynburke/US_Geo_Survey_Mapping/blob/master/Images/legend.png)
