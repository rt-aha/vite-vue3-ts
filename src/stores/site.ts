import { ref } from 'vue';
import type { Ref } from 'vue'
import { defineStore } from 'pinia';


export const useSiteStore = defineStore('site', () => {
  const deviceType: Ref<string[]> = ref([]);


  const setDeviceType = () => {
    const width: number = document.body.clientWidth;
    const typeCollect: Array<string> = [];
    const rwdTyepMatching: {[key: string]: string} = {
      320: 'init',
      576: 'mobile',
      768: 'portrait',
      1024: 'tablet',
      1440: 'sm-pc',
      1600: 'pc',
      2560: 'lg-pc',
    };

    const widthList: Array<number> = [320, 576, 768, 1024, 1440, 1600, 2560];
    widthList.forEach((w) => {
      if (width >= w) {
        typeCollect.push(rwdTyepMatching[String(w)]);
      }
    });

    deviceType.value = typeCollect;
  }


  return {
    deviceType,
    setDeviceType
  }
})
