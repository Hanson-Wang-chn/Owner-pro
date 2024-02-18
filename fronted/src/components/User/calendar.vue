<template>
    <div class="calendar">
        <div class="header"><h1>{{ month }}</h1></div>
        <div class="days">
            <div v-for="day in days" :key="day" :class="{ day: true, special: isSpecial(day), isToday: isToday(day), RadiusShadow: true }">
                {{ day }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            month: '',
            days: []
        };
    },
    mounted() {
        this.generateCalendar();
    },
    methods: {
        generateCalendar() {
            const today = new Date();
            const currentMonth = today.toLocaleString('default', { month: 'long' });
            this.month = currentMonth;
            
            const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
            this.days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
        },
        isSpecial(day) {
            return false   
        },
        isToday(day) {
            const today = new Date();
            // console.log(today.getDate());
            return day == today.getDate()
        }
    }
};
</script>

<style scoped>
.calendar {
    /* box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.145); */
    transform-origin: center; 
    transform: scale(0.85); 
    width: 200px;
    border: 0px solid white;
    padding: 10px;
}

.header {
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 10px;
}

.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
}

.day {
    text-align: left;
    border: 1px solid #ccc;
    padding: 5px;
}

.isToday {
    background-color: #4791F2;
}

.isToday::after {
  content: "Today"; /* 设置伪元素的内容为 "Today" */
  /* display: block; 将内容设置为块级元素，使其单独一行显示 */
  position: right;
  font-size: 8px; /* 设置字体大小 */
  color: black; /* 设置字体颜色 */
}

.radius-shadow {
    border-radius: 15px;
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.145);
}

.radius-shadow:hover {
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.268);
}


</style>
