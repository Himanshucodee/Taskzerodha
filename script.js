     new Vue({
            el: 'vue-slider',
            data: {
                images: [ 'neil.jpg', 'tyson.jpg', 'elon.jpg', 'buzz.jpg','blaise.jpg'],
                quotes: [  "That's one small step for a man, one giant leap for mankind - Neil Armstrong",
        "The Universe is under no obligation to make sense to you - Neil deGrasse Tyson",
        "I would like to die on Mars. Just not on impact - Elon Musk",
        "If we can conquer space, we can conquer childhood hunger - Buzz Aldrin",
        "The eternal silence of these infinite spaces frightens me - Blaise Pascal"],
                currentNumber: 0,
                timer: null
            },

            ready: function () {
                this.startRotation();
            },

            methods: {
                startRotation: function () {
                    this.timer = setInterval(this.next, 3000);
                },

                stopRotation: function () {
                    clearTimeout(this.timer);
                    this.timer = null;
                },

                next: function () {
                    this.currentNumber += 1
                },
                prev: function () {
                    this.currentNumber -= 1
                }
            }
        });