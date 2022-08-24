<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="event-card">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object,
  },
};
</script>

<style scoped>
.event-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-size: 16px;
  width: 400px;
  height: 100px;
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;
}
</style>
