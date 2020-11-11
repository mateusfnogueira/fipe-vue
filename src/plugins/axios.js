"use strict";

import Vue from 'vue';
import axios from "axios";


Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://parallelum.com.br/fipe/api/v1/carros/'
    })
  }
})