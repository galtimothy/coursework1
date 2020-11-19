let app = new Vue({
    el: '#app',
    data: {
        cart: []
        ,
        lessons: lessons,
       
        
    }, 
    methods: {
        

        addToCart: function(lesson){
            if (this.getAvailability(lesson) <= 0) {
                alert("No available spaces");
            } else {
                this.cart.push({
                    lesson: lesson,
                    quantity: 1
                });
                item.getAvailablity--;
            }
        },
        countInCart(lesson) {
            let count = 0;
            this.cart.forEach(item => {
                if(item.lesson == lesson) {
                    count = item.quantity;
                }
            });
            return count;
        },
        getAvailability(lesson) {
            return lesson.availability - this.countInCart(lesson);
        },
        
        
        
        
    },
    computed: {
        
        sort() {
            let lessonsArray = this.lessons.slice(0); 
            let that = this;
            function compare(a, b) {
                if (a[that.selectedFilter] > b[that.selectedFilter]) {
                    return that.selectedOrder == 'ascending' ? 1 : -1;
                }
                if (a[that.selectedFilter] < b[that.selectedFilter]) {
                    return that.selectedOrder == 'ascending' ? -1 : 1;
                }
                return 0; 
            }
            return lessonsArray.sort(compare); 
        }
        
    }
});