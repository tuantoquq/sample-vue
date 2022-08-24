<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }}</p>
    <p>{{ event.details }}</p>
  </div>
</template>
<script>
import { getEventDetails } from '@/service/EventService.js';
export default {
  props: ['id'],
  data() {
    return {
      event: null,
    };
  },
  created() {
    getEventDetails(this.id)
      .then((response) => {
        this.event = response.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
