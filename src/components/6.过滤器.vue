<template>
  <div>
    <p>
      国内网站:粉丝数量：<span>{{ num | wang }}</span
      >万
    </p>
    <p>
      国外网站:粉丝数量：<span>{{ num | qian }}</span
      >千
    </p>
    <p>
      时间：<span>{{ data | time1 }}</span>
    </p>
    <p>
      时间：<span>{{ data | time2 }}</span>
    </p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      num: 1876986,
      data: new Date(),
    };
  },
  filters: {
    wang(val) {
      return val / 10000;
    },
    qian(val) {
      return val / 1000;
    },
    time1(val) {
      return moment(val).format("YYYY-MM-DD");
    },
    time2(val) {
      return moment(val).format("YYYY/MM/DD");
    },
  },
};
</script>
