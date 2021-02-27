import { createApp } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import VueNextSelect from 'vue-next-select';
import 'vue-next-select/dist/index.min.css';

import App from './App.vue';

const app = createApp(App);

app.component('v-select', VueNextSelect);

app.mount('#app');
