<template>
    <GMapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
        <GMapMarker v-for="(marker, index) in markers" :key="index" :position="{ lat: marker.lat, lng: marker.lng }"
            :label="marker.label" />
    </GMapMap>
</template>

<script>
import { GMapMap, GMapMarker } from '@fawmi/vue-google-maps'; // Assicurati che questa importazione funzioni

export default {
    name: 'MapView',
    components: {
        GMapMap,
        GMapMarker,
    },
    props: {
        center: {
            type: Object,
            required: true
        },
        markers: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
/* Stili personalizzati per la mappa */
</style>