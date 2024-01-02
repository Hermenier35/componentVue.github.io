import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.directive('background', (el, binding) => {
  const isCompleted = binding.value; 
  const backgroundColor = isCompleted ? 'green' : 'red';
  el.style.backgroundColor = backgroundColor;

  if (isCompleted) {
    el.style.textDecoration = 'line-through';
  } else {
    el.style.textDecoration = 'none';
  }

});


    