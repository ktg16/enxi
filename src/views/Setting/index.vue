<template>
  <div>
    显示不出
    <baidu-map
      class="map"
      :center="{ lng: 120.356611, lat: 36.081404 }"
      :zoom="20"
      :scroll-wheel-zoom="true"
      mapStyle="f4caea8bc183435a20bce1999078d99b"
    >
      <!-- <bm-map-type
        :type="BMAP_NORMAL_MAP"
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
      >
      </bm-map-type> -->

      <bm-label
        content="我爱恩熙"
        :position="{ lng: 120.356611, lat: 36.081404 }"
        :labelStyle="{ color: 'red', fontSize: '24px', borderRadius: '50%' }"
        title="Hover me"
      />
    </baidu-map>
  </div>
</template>
<script>
export default {
  name: "Setting",
};
</script>

<style>
.map {
  width: 100%;
  height: 300px;
}
</style>