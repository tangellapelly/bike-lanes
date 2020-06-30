import React, { useRef, useEffect } from 'react';
import { platform, colors, locations} from '../config';
import stylePath from '../static/style.yaml';
import './Map.scss';
import Descriptor from './Descriptor';
import layerManager from '../util/LayerManager';
const { H } = window;

const Map = ({ city, side, sliderPos, mobile }) => {
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
      addData();
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

   function addData() {
      const [normalLayer, normalProvider] = layerManager.getNormalLayer();
      map.current.addLayer(normalLayer);
      normalProvider
         .getStyle()
         .setProperty('layers.xyz.lines.draw.lines.color', colors.normal);

      normalProvider
         .getStyle()
         .setProperty('layers.xyz.lines.draw.lines.width', '1px');

      if (side === 'right') {
         const [covidLayer, covidProvider] = layerManager.getCovidLayer();
         map.current.addLayer(covidLayer);

         covidProvider
            .getStyle()
            .setProperty('layers.xyz.lines.draw.lines.color', colors.covid);

         covidProvider
            .getStyle()
            .setProperty('layers.xyz.lines.draw.lines.width', '2px');
      }
   }

   return (
      <div className="map" ref={container}>
         <Descriptor side={side} sliderPos={sliderPos} />
      </div>
   );
};

export default Map;
