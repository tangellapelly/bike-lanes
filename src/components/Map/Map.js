import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { platform } from '../../config';
import stylePath from './style.yaml';
import Logo from '../../static/Logo';
import './Map.scss';

const { H } = window;

const Map = () => {
   const defaultLayers = platform.createDefaultLayers();

   const container = useRef(null);
   const map = useRef(null);

   const objectProvider = new H.map.provider.LocalObjectProvider();
   const objectLayer = new H.map.layer.ObjectLayer(objectProvider);
   const root = objectProvider.getRootGroup();
   useEffect(() => {
      console.log(container);
      map.current = new H.Map(
         // document.querySelector('.test'),
         container.current,
         defaultLayers.vector.normal.map,
         {
            center: { lat: 46.985769, lng: 2.394456 },
            zoom: 6,
            pixelRatio: window.devicePixelRatio || 1,
         }
      );
      window.addEventListener('resize', () =>
         map.current.getViewPort().resize()
      );
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map.current));
      // setStyle();
      map.current.getEngine().setAnimationDuration(1000);
      setStyle();
      // interleave();
   });

   async function setStyle() {
      const style = await fetch(stylePath).then((res) => res.text());
      const provider = map.current.getBaseLayer().getProvider();
      provider.setStyle(new H.map.Style(style));
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
      root.getObjects().forEach((obj) => {
         root.removeObject(obj);
      });
   }

   return <div className="map" ref={container}></div>;
};

// class Map extends Component {
//    constructor(props) {
//       super(props);

//       this.map = null;
//       this.mapRef = React.createRef();

//       this.objectProvider = new H.map.provider.LocalObjectProvider();
//       this.objectLayer = new H.map.layer.ObjectLayer(this.objectProvider);
//       this.root = this.objectProvider.getRootGroup();
//    }

//    async componentDidMount() {
//       const defaultLayers = platform.createDefaultLayers();
//       this.map = new H.Map(
//          // document.querySelector('.test'),
//          this.mapRef.current,
//          defaultLayers.vector.normal.map,
//          {
//             center: { lat: 46.985769, lng: 2.394456 },
//             zoom: 6,
//             pixelRatio: window.devicePixelRatio || 1,
//          }
//       );
//       window.addEventListener('resize', () => this.map.getViewPort().resize());
//       new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
//       this.setStyle();
//       this.map.getEngine().setAnimationDuration(1000);
//    }

//    async setStyle() {
//       const style = await fetch(stylePath).then((res) => res.text());
//       const provider = this.map.getBaseLayer().getProvider();
//       provider.setStyle(new H.map.Style(style));
//       this.interleave(this.map);
//    }

//    interleave(map) {
//       const style = this.map.getBaseLayer().getProvider().getStyle();
//       return new Promise((resolve) => {
//          const changeListener = () => {
//             if (style.getState() === H.map.Style.State.READY) {
//                style.removeEventListener('change', changeListener);
//                map.addLayer(this.objectLayer);
//                const labels = new H.map.Style(style.extractConfig('places'));
//                this.labelsLayer = platform.getOMVService().createLayer(labels);
//                map.addLayer(this.labelsLayer);
//                resolve();
//             }
//          };
//          style.addEventListener('change', changeListener);
//       });
//    }

//    addLabels() {
//       const style = this.labelsLayer.getProvider().getStyle();
//       const config = style.getConfig();
//       config.layers.places.enabled = true;
//       style.mergeConfig(config);
//    }

//    async componentDidUpdate(prevProps) {}

//    removeObjects() {
//       this.root.getObjects().forEach((obj) => {
//          this.root.removeObject(obj);
//       });
//    }

//    async addObjects({ centerMap }) {}

//    render() {
//       return <div className="map" ref={this.mapRef}></div>;
//    }
// }

export default Map;
