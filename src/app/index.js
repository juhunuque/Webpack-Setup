import angular from 'angular';
import template from './index.tpl.html';
import '../style/app.scss';

import pdfFile from '../../tmp/contrato-de-apertura-y-uso-tarjeta-wink.pdf'

console.log('API Key from Define Plugin:', API_KEY);

let component = {
    template // Use ES6 enhanced object literals.
}

let app = angular.module('app', [])
    .component('app', component)
