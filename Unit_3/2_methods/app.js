new Vue({
    el: '#vue-app',
    data: {
        sem: '5th_semester_students',
        job: 'Studying'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.sem;
        }
    }
});
