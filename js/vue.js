const app = new Vue({
    el: '#app',
    data: {
      images:['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'],
      counter: 0,
    },

    mounted(){
        setInterval(() => {
            this.next();
        } , 3000);
    },

    methods:{
        next(){
            (++this.counter >= this.images.length -1) ? this.counter = 0 : this.counter;
        },
        prev(){
            (--this.counter <= 0) ? this.counter = this.images.length - 1 : this.counter;
        }
    },
    

  })