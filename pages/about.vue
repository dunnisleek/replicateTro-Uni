<template>
       <div class="wrapper">
              <Hero/>
              <div class="mid-bg">
                     <div class="content-box">
                            <h1>Our Collection</h1> 
                     <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                     </div>
                
                <div class="tabs">
                     <div class="main-tab">
                            <h4  @click="showAllProduct">All Products</h4>
                            <h4 @click="showAvailableProduct">Available Now</h4>
                     </div>
                   
                   <!-- ALL PRODUCTS -->
                     <div v-if="coffees.length" class="grid-coffee" v-show="active">
                     <div v-for="coffee in coffees" :key="coffee.id">

                     <img :src="coffee.image" alt="coffee-images"/>
                     <P v-if="coffee.popular" class="popular">Popular</P>
                     
             
                   <ul class="coffee-detail">
                     <h2>{{ coffee.name}}</h2>
                     <p class="pricing">{{ coffee.price }}</p>
                    
                   </ul>

                   <ul class="content-rating">
                     <p class="star"> <img src="../assets/dccl--frontend-simple-coffee-listing/Star_fill.svg"/> {{ coffee.rating }}</p>
                    <p class="voting"> &nbsp;&nbsp;({{ coffee.votes }}votes)</p>
                    <P v-if="coffee.available == false" class="soldOut">Sold Out</P>
                   </ul>
            
                 </div> 
                </div>
                <!-- END OF ALL PRODUCTS -->

                <!-- AVAILABLE PRODUCTS -->
                <div v-show="availableProduct">
                     this not available
                </div>
                <!-- <div v-else>
                   <p> Loading </p> 
                </div> -->
              
              </div>
       </div>
       </div>
</template>

<script setup>
definePageMeta({
       // layout:"false"  // this is to disable it
       layout:'sidebar'
})
import {ref, onMounted} from 'vue';

const  coffees = ref ([]);
const  active = ref (true);
const availableProduct = ref(false)



const showAllProduct = () =>{
       active.value = true;
       availableProduct.value = false;

}

const showAvailableProduct = () =>{
       active.value = false;
       availableProduct.value = true;
    
}
const fetchCoffees = async () =>{
 try{ const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
  const data = await response.json()
  coffees.value = data
}
catch(error){
       console.error('there is an error:', error)

}
};
const displayMe = 
 onMounted(fetchCoffees) //Calls fetchCoffees when the component is mounted to fetch coffee data.


</script>
<style scoped>
.wrapper{
       background-color:#111315;
       height: 100vh;
       color:#ffffff;
}
.mid-bg{
       background-color: #1B1D1F;
       background-image: url('../assets/dccl--frontend-simple-coffee-listing/vector.svg');
       background-position:center;
       background-size:cover;
       background-repeat:no-repeat;
       /* width:100%; */
       max-width:1200px;
       position: absolute;
       top:20rem;
       left:0;
       right:0;
       margin:0 auto;
       padding:3rem;
       border-radius:10px;
      
}
.content-box{
        display:flex;
       flex-direction: column;
       align-items: center;
}
.content-box h1{
       font-size:32px;
       padding-bottom: 10px;
}
.content-box p{
       width:500px;
       max-width: 500px;
       color:#6F757C;
       font-size:16px;
       line-height:20px;
       text-align: center;
}
.tabs{
       position: relative;
       display:flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       gap:20px;
       padding:20px;
}
.main-tab{
display:flex;
justify-content: center;
align-items: center;
gap:20px;
margin-bottom:20px;
}
.grid-coffee{
       display:grid;
       grid-template-columns: repeat(3, 1fr);
       gap:20px;
}
.tabs img{
       border-radius:10px;
       
       
}
.tabs ul:first-of-type {
       display:flex;
      justify-content: space-between;
       padding:10px 0px;      
}
.tabs ul:nth-of-type(2){
       padding:0;
}
.tabs .pricing{
       background:#BEE3CC;
       color:#111315;
       padding:5px 8px;
       border-radius: 5px;
}


.tabs .main-tab h4{
       padding:10px;
  border-radius: 5px;
       cursor:pointer;
}
.tabs .main-tab h4:hover{
       background: #6F757C;
}
.tabs .main-tab h4.active{
  background-color: #f0f0f0; /* Change this to your desired active background color */
}
/* .main-tab h4:active{
       background:#6F757C;
}
.main-tab h4:hover{
       background:#6F757C;
       cursor:pointer;
} */
ul .star{
       display:flex;
       align-items: center;
}
ul.coffee-detail{
       padding:10px 0px;
}
.coffee-detail h2{
       font-size:20px;
 
}
.content-rating{
       display:flex;
       align-items: center;
       
}
.voting{
       color:#6F757C;
}
.popular{
      
       position: absolute;
       top: 104px;
  left:176px;
}
.soldOut{
       margin-left:80px;
}

@media only screen and (max-width: 1024px){
       
}
</style>