import React, { useRef, useEffect, useState } from 'react';
import { platform, colors, locations } from '../../config';
import stylePath from './style.yaml';
import './Map.scss';
import Tooltip from '../Tooltip';
const { H } = window;

const Descriptor = ({ side, sliderPos }) => {
   return (
      <div
         style={{ left: side === 'left' ? 0 : sliderPos }}
         className="descriptor"
      >
         {side === 'left' ? 'Pre COVID Lanes' : 'Post COVID Lanes'}
      </div>
   );
};

const Map = ({ data, city, side, sliderPos }) => {
   const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0,
      content: {},
   });

   const defaultLayers = platform.createDefaultLayers();
   const container = useRef(null);
   const map = useRef(null);

   const objectProvider = new H.map.provider.LocalObjectProvider();
   const objectLayer = new H.map.layer.ObjectLayer(objectProvider);
   const root = objectProvider.getRootGroup();
   useEffect(() => {
      console.log('render');
      map.current = new H.Map(
         container.current,
         defaultLayers.vector.normal.map,
         {
            center: locations[city].coordinates,
            zoom: 12.5,
            pixelRatio: window.devicePixelRatio || 1,
         }
      );
      window.addEventListener('resize', () =>
         map.current.getViewPort().resize()
      );
      // new H.mapevents.Behavior(new H.mapevents.MapEvents(map.current));
      // setStyle();
      map.current.getEngine().setAnimationDuration(1000);
      setStyle();
      addObjects();
   }, []);

   useEffect(() => {
      // removeObjects();
      // addObjects();
      map.current.setCenter(locations[city].coordinates);
   }, [city]);

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

         const polyline = new H.map.Polyline(lineString, {
            style: {
               lineWidth: properties.covid ? 3 : 2,
               strokeColor: properties.covid ? colors.covid : colors.normal,
            },
         });

         polyline.addEventListener('pointerenter', (evt) => {
            const { clientX: x, clientY: y } = evt.originalEvent;

            setTooltip({
               visible: true,
               x,
               y,
               content: properties,
            });
         });

         polyline.addEventListener('pointermove', (evt) => {
            const { clientX: x, clientY: y } = evt.originalEvent;
            setTooltip({ visible: true, x, y, content: properties });
         });

         polyline.addEventListener('pointerleave', () => {
            setTooltip({ visible: false });
         });
         map.current.addObject(polyline);
      });
   }

   function interleave() {
      const style = map.current.getBaseLayer().getProvider().getStyle();
      return new Promise((resolve) => {
         const changeListener = () => {
            if (style.getState() === H.map.Style.State.READY) {
               style.removeEventListener('change', changeListener);
               map.current.addLayer(objectLayer);
               const labels = new H.map.Style(style.extractConfig('places'));
               const labelsLayer = platform.getOMVService().createLayer(labels);
               map.current.addLayer(labelsLayer);
               resolve();
            }
         };
         style.addEventListener('change', changeListener);
      });
   }

   function removeObjects() {
      map.current.getObjects().forEach((obj) => {
         map.current.removeObject(obj);
      });
   }
   return (
      <div className="map" ref={container}>
         <Descriptor side={side} sliderPos={sliderPos} />
         {tooltip.visible && (
            <Tooltip x={tooltip.x} y={tooltip.y} content={tooltip.content} />
         )}
      </div>
   );
};

export default Map;
