import { normal, covid } from './style/global.scss';
import React from 'react';
import measurements from './data/measurements.json';

/**
 * This is the language key
 * Options: de, en
 */

export const CURRENT_LANGUAGE = 'fr';

/**
 * This is the HERE Developer API Key
 * TODO: Change api key to this:
 * ZPsPkW20penY5wYBXiQF5PYIZs22XVSNMiykcJ0cwRw
 *
 */
export const apikey = '1vO5Q3rOsOrwY8Ib0s_AEJn0-OyK0GvDBmAhyqNPHYc';

/**
 * This is the XYZ Access Token
 * TODO: Change token to new account
 */
export const token = 'AFhj08d4S16jImglDHNMagA';

/**
 * TODO: These must be changed, see README file for more info.
 */
export const spaces = {
   normal: 'Sa0FZdYc',
   covid: 'amsOcYNf',
};

export const platform = new window.H.service.Platform({ apikey });

export const colors = {
   covid,
   normal,
};

export const locations = {
   paris: {
      coordinates: { lat: 48.864716, lng: 2.349014 },
      labels: {
         fr: 'Paris',
         en: 'Paris',
         de: 'Paris',
      },
      attribution: (
         <a href="https://opendata.paris.fr/page/home/">Open Data Paris</a>
      ),
      measurements: measurements.paris,
      population: 2148271,
      countryCode: 'fra',
   },
   nantes: {
      coordinates: { lat: 47.218102, lng: -1.5528 },
      labels: {
         fr: 'Nantes',
         en: 'Nantes',
         de: 'Nantes',
      },
      attribution: <a href="https://data.grandlyon.com">data.grandlyon.com</a>,
      measurements: measurements.nantes,
      population: 309346,
      countryCode: 'fra',
   },
   lyon: {
      coordinates: { lat: 45.74846, lng: 4.84671 },
      labels: {
         fr: 'Lyon',
         en: 'Lyon',
         de: 'Lyon',
      },
      attribution: (
         <a href="https://data.nantesmetropole.fr/pages/home/">
            data.nantesmetropole.fr
         </a>
      ),
      measurements: measurements.lyon,
      population: 513275,
      countryCode: 'fra',
   },
   berlin: {
      coordinates: { lat: 52.520008, lng: 13.404954 },
      labels: {
         fr: 'Berlin',
         en: 'Berlin',
         de: 'Berlin',
      },
      attribution: (
         <>
            <a href="https://fbinter.stadt-berlin.de/fb/index.jsp">
               Geoportal Berlin
            </a>{' '}
            &{' '}
            <a href="https://www.infravelo.de/temporaere-radfahrstreifen/">
               Infravelo
            </a>
         </>
      ),
      measurements: measurements.berlin,
      population: 3769495,
      countryCode: 'deu',
   },
   frankfurt: {
      coordinates: { lat: 50.110924, lng: 8.682127 },
      labels: {
         fr: 'Frankfurt',
         en: 'Frankfurt',
         de: 'Frankfurt am Main',
      },
      attribution: (
         <>
            HERE &{' '}
            <a href="https://www.adfc-frankfurt.de/Archiv/Nachrichten/00444.html">
               ADFC
            </a>
         </>
      ),
      measurements: measurements.frankfurt,
      population: 753056,
      countryCode: 'deu',
   },
   stuttgart: {
      coordinates: { lat: 48.783333, lng: 9.183333 },
      labels: {
         fr: 'Stuttgart',
         en: 'Stuttgart',
         de: 'Stuttgart',
      },
      attribution: (
         <>
            HERE &{' '}
            <a href="https://www.swr.de/swraktuell/baden-wuerttemberg/stuttgart/neue-radwege-pop-up-bike-lanes-stuttgart-104.html">
               SWR
            </a>
         </>
      ),
      measurements: measurements.stuttgart,
      population: 634830,
      countryCode: 'deu',
   },
   hamburg: {
      coordinates: { lat: 53.551086, lng: 9.993682 },
      labels: {
         fr: 'Hamburg',
         en: 'Hamburg',
         de: 'Hamburg',
      },
      attribution: (
         <>
            HERE &{' '}
            <a href="https://www.24hamburg.de/hamburg/hamburg-pop-up-radweg-adfc-alster-protest-notwehr-verkehr-coronavirus-sars-cov-2-90000966.html">
               24Hamburg
            </a>
         </>
      ),
      measurements: measurements.hamburg,
      population: 1899160,
      countryCode: 'deu',
   },
   milan: {
      coordinates: { lat: 45.464664, lng: 9.18854 },
      labels: {
         fr: 'Milan',
         en: 'Milan',
         de: 'Mailand',
      },
      attribution: (
         <>
            <a href="https://www.milanoweekend.it/articoli/piste-ciclabili-a-milano/">
               Milano Weekend
            </a>
            ,{' '}
            <a href="https://www.comune.milano.it/documents/20126/6143581/Progetto+ciclabilit%C3%A0+2020.pdf/85dcdaf8-b9e2-b474-495e-fd9e64f98bdb?t=1587745244897">
               Comune di Milano
            </a>{' '}
            &{' '}
            <a href="https://dati.comune.milano.it/dataset/ds60_infogeo_piste_ciclabili_localizzazione_">
               Comune di Milano Open Data Portal
            </a>
         </>
      ),
      measurements: measurements.milan,
      population: 1404431,
      countryCode: 'ita',
   },
   barcelona: {
      coordinates: { lat: 41.392208, lng: 2.174173 },
      labels: {
         fr: 'Barcelone',
         en: 'Barcelona',
         de: 'Barcelona',
      },
      attribution: 'HERE',
      measurements: measurements.barcelona,
      population: 1620343,
      countryCode: 'esp',
   },
   munich: {
      coordinates: { lat: 48.137154, lng: 11.576124 },
      labels: {
         fr: 'Munich',
         en: 'Munich',
         de: 'München',
      },
      attribution: (
         <a href="https://www.sueddeutsche.de/muenchen/muenchen-corona-pop-up-radwege-1.4915026">
            SZ
         </a>
      ),
      measurements: measurements.munich,
      population: 1471508,
      countryCode: 'deu',
   },
};

export const languages = {
   title: {
      fr: (name) => `Nouvelles pistes cyclables post COVID à ${name}`,
      de: (name) => `Corona-Pop-Up-Radwege in ${name}`,
      en: (name) => `Social distancing pop-up bike lanes in ${name}`,
   },
   aboutTitle: {
      fr: () => 'A propos',
      de: () => 'Über die Karte',
      en: () => 'About',
   },
   aboutParagraphs: {
      fr: () => (
         <>
            <p>
               De nombreuses autorités locales à travers l’Europe encouragent
               les déplacements à vélo afin de réduire les risques sanitaires
               liés à la pandémie ainsi que la pollution.
            </p>
            <p>
               Dans ce contexte, plusieurs villes françaises et européennes ont
               créé de nouvelles pistes cyclables. Sélectionnez une ville dans
               la liste ci-dessous pour consulter les « coronapistes » sur la
               carte.
            </p>
            <p>
               Pour visualiser les évolutions, balayez l’écran avec le curseur,
               de gauche à droite sur la carte.
            </p>
         </>
      ),
      de: () => (
         <>
            <p>
               Kommunale Behörden in ganz Europa fördern Radfahren als sicheres
               Verkehrsmittel im Zeitalter von Corona und zur Verringerung von
               Luftverschmutzung.
            </p>
            <p>
               Viele Städte haben neue Radwege ausgewiesen, um trotz Social
               Distancing Mobilität in der Stadt zu ermöglichen. Auf dieser
               Karte lassen sich die neu eröffneten Radwege in jeder Stadt aus
               der untenstehenden Liste ansehen.
            </p>

            <p>
               Mit Hilfe des Schiebers lässt sich das Radnetz vor und nach
               Corona miteinander vergleichen. Für einen exakten Standort oder
               um den nächstgelegenen Pop-Up-Radweg zu finden, bitte zoomen.
            </p>
         </>
      ),
      en: () => (
         <>
            <p>
               Municipal authorities across Europe encourage cycling as safe
               means of transportation in the era of COVID-19 and a way to
               reduce air pollution.
            </p>
            <p>
               Many cities have opened new lanes promoting social distancing
               while biking. In this map you can explore the newly opened bike
               lanes in each city from the list below.
            </p>

            <p>
               By using the slider you can compare the pre-COVID-19 with
               post-COVID-19 state of the network. Zoom in for exact location
               and to find the nearest social distancing bike lane.
            </p>
         </>
      ),
   },

   legendTitle: {
      fr: () => 'Légende',
      de: () => 'Legende',
      en: () => 'Legend',
   },
   legendLabelNormal: {
      fr: () => 'Pistes existantes avant COVID-19',
      de: () => 'Radwege vor Corona',
      en: () => 'Lanes pre COVID-19',
   },
   legendLabelCovid: {
      fr: () => 'Pistes créées en raison de COVID-19',
      de: () => 'Radwege nach Corona',
      en: () => 'Lanes post COVID-19',
   },
   headerLabelCity: {
      fr: () => 'ville',
      de: () => 'Stadt',
      en: () => 'City',
   },
   headerLabelPopulation: {
      fr: () => 'population',
      de: () => 'Bevölkerung',
      en: () => 'Population',
   },
   headerLabelCoronaLanes: {
      fr: () => 'coronapistes',
      de: () => 'Neue Radwege insgesamt',
      en: () => 'Sum of new lanes',
   },
   dataAttributionLabel: {
      fr: () => 'Données fournies par',
      de: () => 'Die Daten werden von',
      en: () => 'Data provided by',
   },
   finePrintLabel: {
      fr: () =>
         'La distance couverte par les voies cyclables listée sur ce site peut ne pas correspondre exactement aux spécifications de certaines villes.',
      de: () =>
         'Die auf den auf dieser Website aufgeführten Radwegen zurückgelegte Entfernung entspricht möglicherweise nicht genau den Spezifikationen einiger Städte.',
      en: () =>
         'The distance covered by bicycle lanes listed on this site may not correspond exactly to the specifications of certain cities.',
   },
   mapDescriptorNormalLabel: {
      fr: () => 'Pistes existantes avant COVID-19',
      de: () => 'Radwege vor Corona',
      en: () => 'Lanes pre COVID-19',
   },
   mapDescriptorCovidLabel: {
      fr: () => 'Pistes créées en raison de COVID-19',
      de: () => 'Radwege nach Corona',
      en: () => 'Lanes post COVID-19',
   },
   mobileNavMapLabel: {
      fr: () => 'Carte',
      de: () => 'Karte',
      en: () => 'Map',
   },
   mobileNavInfoLabel: {
      fr: () => 'Infos',
      de: () => 'Info',
      en: () => 'Map',
   },
};
