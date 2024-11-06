<template>
       <div class="second-wrapper">
         <div>
           <h2>Why Choose Trove University?</h2>
           <div class="section-heading" :class="{ activeBtn: activeSection === 'section1' }" id="heading1" data-section="section1">
             <h4>Expert-Led Learning</h4>
             <p>With Trove University, you have access to a wealth of knowledge and resources designed to guide you on your financial journey...</p>
           </div>
           <div class="section-heading" :class="{ activeBtn: activeSection === 'section2' }" id="heading2" data-section="section2">
             <h4>Interactive Lessons</h4>
             <p>With Trove University, you have access to interactive lessons that make learning engaging and effective for everyone.</p>
           </div>
         </div>
         <div class="border-side">
           <div id="section1">
             <img src="~assets/dccl--frontend-simple-coffee-listing/expert-led_learning (1).svg" />
           </div>
           <div id="section2">
             <img src="~assets/dccl--frontend-simple-coffee-listing/interactive_lessons (1).svg" />
           </div>
         </div>
       </div>
     </template>
     
     <script setup>
     import { ref, onMounted } from 'vue';
     
     const activeSection = ref(null);
     
     onMounted(() => {
       const sections = document.querySelectorAll('.border-side > div');
       const observer = new IntersectionObserver(
         (entries) => {
           entries.forEach((entry) => {
             if (entry.isIntersecting) {
               activeSection.value = entry.target.id;
             }
           });
         },
         { threshold: 0.5 }
       );
     
       sections.forEach((section) => observer.observe(section));
     });
     </script>
     
     <style scoped>
     .activeBtn h4, .activeBtn p {
       color: #007BFF;
       font-weight: bold;
     }
     
     .section-heading {
       transition: color 0.3s ease, font-weight 0.3s ease;
     }
     </style>
     