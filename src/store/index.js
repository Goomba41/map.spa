import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mapPoints: [
      {
        lat: 58.6044629110452,
        lng: 49.66875320602254,
        name: "Памятник Шаляпину",
        description:
          "Vestibulum fringilla pede sit amet augue. Suspendisse non nisl sit amet velit hendrerit rutrum. Duis vel nibh at velit scelerisque suscipit. Nam eget dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        cover: "object01.webp",
        id: 1,
        icon: "iconAttractionPoint.webp",
        authorPrimary: {
          id: 3,
          ap: "author03.webp",
          as: "Бородавкин",
          an: "Антон",
          apt: "Владимирович",
        },
        authorSecondary: [
          {
            id: 2,
            ap: "author02.webp",
            as: "Жаравин",
            an: "Владимир",
            apt: "Сергеевич",
          },
          {
            id: 1,
            ap: "author01.webp",
            as: "Чудиновских",
            an: "Елена",
            apt: "Николаевна",
          },
        ],
        cdate: "2021-04-01",
        text: "<p>Suspendisse faucibus, nunc et pellentesque egestas<sup class='source-link'><a  href='#source-2'>[2]</a></sup>, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Etiam iaculis nunc ac metus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Nunc nonummy metus. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus gravida semper nisi. Nullam cursus lacinia erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.</p><p>Curabitur blandit mollis lacus. Ut varius tincidunt libero. Cras sagittis. Nullam accumsan lorem in dui. Vivamus euismod mauris.</p><p>Fusce convallis metus id felis luctus adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sit amet orci eget eros faucibus tincidunt<sup class='source-link'><a href='#source-3'>[3]</a></sup>. Duis leo. Aenean vulputate eleifend tellus.</p><p>Vestibulum volutpat pretium libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur at lacus ac velit ornare lobortis. Phasellus blandit leo ut odio. Aenean massa.</p>",
      },
      {
        lat: 58.59678289009719,
        lng: 49.68763668964296,
        name: "Свято-серафимовский собор",
        description:
          "Vestibulum fringilla pede sit amet augue. Suspendisse non nisl sit amet velit hendrerit rutrum. Duis vel nibh at velit scelerisque suscipit. Nam eget dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        cover: "object02.webp",
        id: 2,
        icon: "iconChurch.webp",
        authorPrimary: {
          id: 1,
          ap: "author01.webp",
          as: "Чудиновских",
          an: "Елена",
          apt: "Николаевна",
        },
        authorSecondary: [
          {
            id: 2,
            ap: "author02.webp",
            as: "Жаравин",
            an: "Владимир",
            apt: "Сергеевич",
          },
        ],
        cdate: "2021-04-01",
        text: "<p>Suspendisse faucibus, nunc et pellentesque egestas<sup class='source-link'><a  href='#source-2'>[2]</a></sup>, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Etiam iaculis nunc ac metus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Nunc nonummy metus. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus gravida semper nisi. Nullam cursus lacinia erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.</p><p>Curabitur blandit mollis lacus. Ut varius tincidunt libero. Cras sagittis. Nullam accumsan lorem in dui. Vivamus euismod mauris.</p><p>Fusce convallis metus id felis luctus adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sit amet orci eget eros faucibus tincidunt<sup class='source-link'><a href='#source-3'>[3]</a></sup>. Duis leo. Aenean vulputate eleifend tellus.</p><p>Vestibulum volutpat pretium libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur at lacus ac velit ornare lobortis. Phasellus blandit leo ut odio. Aenean massa.</p>",
      },
      {
        lat: 58.61814921582481,
        lng: 49.66532621669033,
        name: "Кировский комбинат искусственных кож (ИСКОЖ)",
        description:
          "Vestibulum fringilla pede sit amet augue. Suspendisse non nisl sit amet velit hendrerit rutrum. Duis vel nibh at velit scelerisque suscipit. Nam eget dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        cover: "object03.webp",
        id: 3,
        icon: "iconIndustry.webp",
        authorPrimary: {
          id: 2,
          ap: "author02.webp",
          as: "Жаравин",
          an: "Владимир",
          apt: "Сергеевич",
        },
        authorSecondary: [],
        cdate: "2021-04-01",
        text: "<p>Suspendisse faucibus, nunc et pellentesque egestas<sup class='source-link'><a  href='#source-2'>[2]</a></sup>, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Etiam iaculis nunc ac metus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Nunc nonummy metus. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus gravida semper nisi. Nullam cursus lacinia erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.</p><p>Curabitur blandit mollis lacus. Ut varius tincidunt libero. Cras sagittis. Nullam accumsan lorem in dui. Vivamus euismod mauris.</p><p>Fusce convallis metus id felis luctus adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sit amet orci eget eros faucibus tincidunt<sup class='source-link'><a href='#source-3'>[3]</a></sup>. Duis leo. Aenean vulputate eleifend tellus.</p><p>Vestibulum volutpat pretium libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur at lacus ac velit ornare lobortis. Phasellus blandit leo ut odio. Aenean massa.</p>",
      },
      {
        lat: 58.5882952890457,
        lng: 49.652623274795786,
        name: "Парк имени Кирова",
        description:
          "Vestibulum fringilla pede sit amet augue. Suspendisse non nisl sit amet velit hendrerit rutrum. Duis vel nibh at velit scelerisque suscipit. Nam eget dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        cover: "object04.webp",
        id: 4,
        icon: "iconRecreation.webp",
        authorPrimary: {
          id: 2,
          ap: "author02.webp",
          as: "Жаравин",
          an: "Владимир",
          apt: "Сергеевич",
        },
        authorSecondary: [],
        cdate: "2021-04-01",
        text: "<p>Suspendisse faucibus, nunc et pellentesque egestas<sup class='source-link'><a  href='#source-2'>[2]</a></sup>, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Etiam iaculis nunc ac metus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Nunc nonummy metus. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus gravida semper nisi. Nullam cursus lacinia erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.</p><p>Curabitur blandit mollis lacus. Ut varius tincidunt libero. Cras sagittis. Nullam accumsan lorem in dui. Vivamus euismod mauris.</p><p>Fusce convallis metus id felis luctus adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sit amet orci eget eros faucibus tincidunt<sup class='source-link'><a href='#source-3'>[3]</a></sup>. Duis leo. Aenean vulputate eleifend tellus.</p><p>Vestibulum volutpat pretium libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur at lacus ac velit ornare lobortis. Phasellus blandit leo ut odio. Aenean massa.</p>",
      },
      {
        lat: 58.605585705325915,
        lng: 49.685117193521044,
        name: "Стадион «Динамо»",
        description:
          "Vestibulum fringilla pede sit amet augue. Suspendisse non nisl sit amet velit hendrerit rutrum. Duis vel nibh at velit scelerisque suscipit. Nam eget dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        cover: "object05.webp",
        id: 5,
        icon: "iconSport.webp",
        authorPrimary: {
          id: 2,
          ap: "author02.webp",
          as: "Жаравин",
          an: "Владимир",
          apt: "Сергеевич",
        },
        authorSecondary: [],
        cdate: "2021-04-01",
        text: "<p>Suspendisse faucibus, nunc et pellentesque egestas<sup class='source-link'><a  href='#source-2'>[2]</a></sup>, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Etiam iaculis nunc ac metus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Nunc nonummy metus. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus gravida semper nisi. Nullam cursus lacinia erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.</p><p>Curabitur blandit mollis lacus. Ut varius tincidunt libero. Cras sagittis. Nullam accumsan lorem in dui. Vivamus euismod mauris.</p><p>Fusce convallis metus id felis luctus adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sit amet orci eget eros faucibus tincidunt<sup class='source-link'><a href='#source-3'>[3]</a></sup>. Duis leo. Aenean vulputate eleifend tellus.</p><p>Vestibulum volutpat pretium libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur at lacus ac velit ornare lobortis. Phasellus blandit leo ut odio. Aenean massa.</p>",
      },
      {
        lat: 58.61550599616619,
        lng: 49.701585956872464,
        name: "село Дымково",
        description:
          "Vestibulum fringilla pede sit amet augue. Suspendisse non nisl sit amet velit hendrerit rutrum. Duis vel nibh at velit scelerisque suscipit. Nam eget dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        cover: "object06.webp",
        id: 6,
        icon: "iconVillage.webp",
        authorPrimary: {
          id: 1,
          ap: "author01.webp",
          as: "Чудиновских",
          an: "Елена",
          apt: "Николаевна",
        },
        authorSecondary: [],
        cdate: "2021-04-01",
        text: "<p>Suspendisse faucibus, nunc et pellentesque egestas<sup class='source-link'><a  href='#source-2'>[2]</a></sup>, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Etiam iaculis nunc ac metus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Nunc nonummy metus. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus gravida semper nisi. Nullam cursus lacinia erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.</p><p>Curabitur blandit mollis lacus. Ut varius tincidunt libero. Cras sagittis. Nullam accumsan lorem in dui. Vivamus euismod mauris.</p><p>Fusce convallis metus id felis luctus adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sit amet orci eget eros faucibus tincidunt<sup class='source-link'><a href='#source-3'>[3]</a></sup>. Duis leo. Aenean vulputate eleifend tellus.</p><p>Vestibulum volutpat pretium libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur at lacus ac velit ornare lobortis. Phasellus blandit leo ut odio. Aenean massa.</p>",
      },
      {
        lat: 58.20705629839807,
        lng: 49.28341419164265,
        name: "Церковь Зосимы и Савватия Соловецких в Коршике",
        description:
          "Зосимо-Савватиевская церковь каменная в с. Коршик построена в 1777 году. В результате великого разрушения 30-х годов от этого множества церквей полностью уцелело только семь церквей XVIII столетия. В числе полностью уцелевших была и Зосимо-Савватиевская церковь села Коршик. Она не была закрыта при И. Сталине. По красоте, величию, живописи, художественной отделке резных иконостасов эта церковь была самым лучшим (из оставшихся) памятником церковного зодчества XVIII ст. на территории Кировской области.",
        cover: "object07.webp",
        id: 7,
        icon: "iconChurch.webp",
        authorPrimary: {
          id: 1,
          ap: "author01.webp",
          as: "Чудиновских",
          an: "Елена",
          apt: "Николаевна",
        },
        authorSecondary: [
          {
            id: 2,
            ap: "author02.webp",
            as: "Жаравин",
            an: "Владимир",
            apt: "Сергеевич",
          },
          {
            id: 3,
            ap: "author03.webp",
            as: "Бородавкин",
            an: "Антон",
            apt: "Владимирович",
          },
          {
            id: 4,
            ap: "author04.webp",
            as: "Анонимов",
            an: "Аноним",
            apt: "Анонимович",
          },
        ],
        cdate: "2021-04-01",
        text: "<p>Suspendisse faucibus, nunc et pellentesque egestas<sup class='source-link'><a  href='#source-2'>[2]</a></sup>, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Etiam iaculis nunc ac metus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Nunc nonummy metus. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus gravida semper nisi. Nullam cursus lacinia erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.</p><p>Curabitur blandit mollis lacus. Ut varius tincidunt libero. Cras sagittis. Nullam accumsan lorem in dui. Vivamus euismod mauris.</p><p>Fusce convallis metus id felis luctus adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sit amet orci eget eros faucibus tincidunt<sup class='source-link'><a href='#source-3'>[3]</a></sup>. Duis leo. Aenean vulputate eleifend tellus.</p><p>Vestibulum volutpat pretium libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur at lacus ac velit ornare lobortis. Phasellus blandit leo ut odio. Aenean massa.</p>",
      },
      {
        lat: 58.60168756791216,
        lng: 49.72507279102687,
        name: "Заречный парк",
        description:
          "3 мая 1935 года Кировский горисполком представил в край" +
          "исполком, разработанный земельно-зеленным отделом эскизный план" +
          " будущего парка. В приложении было записано: «Под парк отводится" +
          " так называемая Заречная роща с прилегающими участками лугов" +
          " на берегу реки, пляжем и лугами в сторону Дымковской слободы и" +
          " деревни Субботиха. Парк должен в полной степени использовать" +
          " красоты векового соснового леса с его многочисленными озёрами," +
          " полянами, лугами, рекой и т. д.»",
        cover: "object08.webp",
        id: 8,
        icon: "iconRecreation.webp",
        authorPrimary: {
          id: 2,
          ap: "author02.webp",
          as: "Жаравин",
          an: "Владимир",
          apt: "Сергеевич",
        },
        authorSecondary: [],
        cdate: "2021-04-01",
        text: "<p>Suspendisse faucibus, nunc et pellentesque egestas<sup class='source-link'><a  href='#source-2'>[2]</a></sup>, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Etiam iaculis nunc ac metus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Nunc nonummy metus. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus gravida semper nisi. Nullam cursus lacinia erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.</p><p>Curabitur blandit mollis lacus. Ut varius tincidunt libero. Cras sagittis. Nullam accumsan lorem in dui. Vivamus euismod mauris.</p><p>Fusce convallis metus id felis luctus adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sit amet orci eget eros faucibus tincidunt<sup class='source-link'><a href='#source-3'>[3]</a></sup>. Duis leo. Aenean vulputate eleifend tellus.</p><p>Vestibulum volutpat pretium libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur at lacus ac velit ornare lobortis. Phasellus blandit leo ut odio. Aenean massa.</p>",
      },
      {
        lat: 58.60356665580581,
        lng: 49.66803437400654,
        name: "Театральная площадь",
        description:
          "Vestibulum fringilla pede sit amet augue. Suspendisse non nisl sit amet velit hendrerit rutrum. Duis vel nibh at velit scelerisque suscipit. Nam eget dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        cover: "object09.webp",
        id: 9,
        icon: "iconAttractionPoint.webp",
        authorPrimary: {
          id: 3,
          ap: "author03.webp",
          as: "Бородавкин",
          an: "Антон",
          apt: "Владимирович",
        },
        authorSecondary: [],
        cdate: "2021-04-01",
        text: "<p>Suspendisse faucibus, nunc et pellentesque egestas<sup class='source-link'><a  href='#source-2'>[2]</a></sup>, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Etiam iaculis nunc ac metus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Nunc nonummy metus. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus gravida semper nisi. Nullam cursus lacinia erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.</p><p>Curabitur blandit mollis lacus. Ut varius tincidunt libero. Cras sagittis. Nullam accumsan lorem in dui. Vivamus euismod mauris.</p><p>Fusce convallis metus id felis luctus adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sit amet orci eget eros faucibus tincidunt<sup class='source-link'><a href='#source-3'>[3]</a></sup>. Duis leo. Aenean vulputate eleifend tellus.</p><p>Vestibulum volutpat pretium libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur at lacus ac velit ornare lobortis. Phasellus blandit leo ut odio. Aenean massa.</p>",
      },
    ],
    authors: [
      {
        id: 1,
        photo: "author01.webp",
        f: "Чудиновских",
        i: "Елена",
        o: "Николаевна",
        status: "Автор статей, фотограф",
        actions: "Написание статей, поездки по области и фото.",
      },
      {
        id: 2,
        photo: "author02.webp",
        f: "Жаравин",
        i: "Владимир",
        o: "Сергеевич",
        status: "Автор статей, историк",
        actions: "Написание статей, подбор материалов и работа в архиве.",
      },
      {
        id: 3,
        photo: "author03.webp",
        f: "Бородавкин",
        i: "Антон",
        o: "Владимирович",
        status: "Автор проекта, программист",
        actions: "Дизайн и бэкенд, техническая реализация и содержание сайта.",
      },
      {
        id: 4,
        photo: "author04.webp",
        f: "Анонимов",
        i: "Аноним",
        o: "Анонимович",
        status: "Темная лошадка",
        actions: "До сих пор непонятно, кто он и чем занимается.",
      },
    ],
  },
  getters: {
    getPoint: (state) => (id) => {
      return state.mapPoints.find((point) => point.id === parseInt(id));
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
