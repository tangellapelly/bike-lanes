import { normal, covid } from './style/global.scss';
const apikey = '1vO5Q3rOsOrwY8Ib0s_AEJn0-OyK0GvDBmAhyqNPHYc'; //Christo's: 'ZPsPkW20penY5wYBXiQF5PYIZs22XVSNMiykcJ0cwRw';
const { H } = window;
const platform = new H.service.Platform({ apikey });

const colors = {
   covid,
   normal,
};

export { platform, colors };
