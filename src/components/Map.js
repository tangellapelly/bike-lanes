import React, { useRef, useEffect, useState } from 'react';
import { platform, colors, locations } from '../config';
import stylePath from '../static/style.yaml';
import './Map.scss';
const { H } = window;

const Descriptor = ({ side, sliderPos }) => {
   return (
      <div
         style={{ left: side === 'left' ? 0 : sliderPos }}
         className="descriptor"
      >
         {side === 'left'
            ? 'Pistes existantes avant COVID-19'
            : 'Pistes créées en raison de COVID-19'}
      </div>
   );
};

const Map = ({ data, city, side, sliderPos, mobile }) => {
   const defaultLayers = platform.createDefaultLayers();
   const container = useRef(null);
   const map = useRef(null);

   useEffect(() => {
      map.current = new H.Map(
         container.current,
         defaultLayers.vector.normal.map,
         {
            center: locations[city].coordinates,
            zoom: mobile ? 12.5 : 13.2,
            pixelRatio: window.devicePixelRatio || 1,
         }
      );
      window.addEventListener('resize', () =>
         map.current.getViewPort().resize()
      );
      setStyle();
      addObjects();
   }, []);

   useEffect(() => {
      map.current.setCenter(locations[city].coordinates);
      map.current.setZoom(mobile ? 12.5 : 13.2);
   }, [city]);

   useEffect(() => {
      map.current.getViewPort().resize();
      map.current.setZoom(mobile ? 12.5 : 13.2);
   }, [mobile]);

   async function setStyle() {
      const style = await fetch(stylePath).then((res) => res.text());
      const provider = map.current.getBaseLayer().getProvider();
      provider.setStyle(new H.map.Style(style));
   }

   function addObjects() {
      data.forEach(({ geometry, properties }) => {
         const lineString = new H.geo.LineString();
         if (geometry.type === 'LineString') {
            geometry.coordinates.forEach(([lng, lat]) => {
               lineString.pushPoint({ lat, lng });
            });
         } else if (geometry.type === 'MultiLineString') {
            geometry.coordinates.forEach((link) => {
               link.forEach(([lng, lat]) => {
                  lineString.pushPoint({ lat, lng });
               });
            });
         }
         map.current.addObject(
            new H.map.Polyline(lineString, {
               style: {
                  lineWidth: properties.covid ? 2 : 1,
                  strokeColor: properties.covid ? colors.covid : colors.normal,
               },
            })
         );
      });
   }

   return (
      <div className="map" ref={container}>
         <Descriptor side={side} sliderPos={sliderPos} />
      </div>
   );
};

export default Map;
