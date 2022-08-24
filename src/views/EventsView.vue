<template>
  <div class="events">
    <h1 class="title">Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue';
import { getAllEvents } from '@/service/EventService.js';

export default {
  name: 'EventsView',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    getAllEvents()
      .then((response) => {
        this.events = response.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin-bottom: 30px;
}
</style>
