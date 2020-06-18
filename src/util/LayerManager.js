import { platform, spaces, token } from '../config';
const { H } = window;
class LayerManager {
   constructor() {
      this.service = platform.getXYZService({
         token,
      });

      this.covidProvider = new H.service.xyz.Provider(
         this.service,
         spaces.covid
      );
      this.covidLayer = new H.map.layer.TileLayer(this.covidProvider);

      this.normalProvider = new H.service.xyz.Provider(
         this.service,
         spaces.normal
      );
      this.normalLayer = new H.map.layer.TileLayer(this.normalProvider);
   }

   getCovidLayer() {
      return [this.covidLayer, this.covidProvider];
   }

   getNormalLayer() {
      return [this.normalLayer, this.normalProvider];
   }
}

const layerManager = new LayerManager();

export default layerManager;
