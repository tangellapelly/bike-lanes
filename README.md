# France Bike Lanes Map

## Deployment steps

This is a React application. Prior to deployment, please follow these steps:

### Open Graph URL

The current public url is set to: https://app.developer.here.com/pop-up-bike-lanes-europe/. If this is not the deployment url, then this URL must be changed in the `public/index.html` file to reflect the new url. If this is not changed, then Open Graph / Social Media tags will not work.

### Data

The data for this map is held in two XYZ Spaces: one xyz space for the non-covid data and one xyz space for the covid data.
You can find this data locally in the project under `scripts/data/covid.json` and `scripts/data/normal.json`.

The data is added to an XYZ Space so the javascript bundle doesn't have to load everything at once initially.

However, this data is stored under my old account (dylan.babbs@here.com). **It is up to the person who will deploy this app to decide if they data should be moved to a different XYZ account**. To do that, that is simple. Follow these steps:

1. Navigate to `scripts/data`.

```
cd scripts/data
```

2. Create an XYZ Space for the normal (non-covid data).

```
here xyz create -t "normal bike lane data"
```

3. Uploaded the data to the newly created XYZ Space. The `-s` is for streaming and makes the upload process much faster.

```
here xyz upload {SPACE-ID} -f normal.json -s
```

4. Repeat steps #2 and #3 for the covid data.
5. You will now have two different XYZ Spaces. Take the two space IDs and open `src/config.js` and replace the object with the new tokens:

```javascript
export const spaces = {
   normal: {space-id-here},
   covid: {space-id-here}
};
```

6. Go to the XYZ Token manager and grab a read only token. THis way people cannot look at the source code in the app and delete the data. Inside of `src/config.js`, replace the token with:

```
export const token = 'AFhj08d4S16jImglDHNMagA';
```

7. The data will now work

### HERE API Key

1. Go to `src/config.js` and replace the `apikey` variable with the API Key that they would like to use.

### Deployment and building

This application can be built using the command:

```
yarn build
```

This will create a production version of the application which can then be hosted like a static site.
