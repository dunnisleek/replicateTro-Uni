<template>
<!-- hero image -->
<div>
       <div class="herowrapper">
              <p class="orangeBg">WELCOME TO TROVE UNIVERSITY</p>
              <h1>Empowering the Next Generation of Investors</h1>
              <p class="para"> With Trove University, you have access to a wealth of knowledge and resources designed to guide you on your financial journey. Whether you’re just starting out or looking to deepen your understanding 
              of the financial markets, Trove University is here to support you every step of the way.</p>
              <img src="../assets/dccl--frontend-simple-coffee-listing/hero-img.png" alt="heroimg"/>
       </div>
     <!-- end of hero image -->  

     <!-- start of 2nd section -->
     <div class="second-wrapper">
       <div>
              <h2>Why Choose Trove University?</h2>

              <h4  :class="{ activeBtn: activeSection === 'section1' }" id="heading1">Expert-Led Learning</h4>
              <h4 :class="{ activeBtn: activeSection === 'section2' }"  id="heading2">Interactive Lessons</h4>
       </div>
       <div class="border-side">
              <div id="section1">
                     <img src="../assets/dccl--frontend-simple-coffee-listing/expert-led_learning (1).svg"/>
                     <p>With Trove University, you have access to a wealth of knowledge and resources designed to guide you on your financial journey. Whether you're just starting out or looking to deepen your understanding 
                     of the financial markets, Trove University is here to support you every step of the way.</p>
              </div>
              <div id="section2">
                     <img src="../assets/dccl--frontend-simple-coffee-listing/interactive_lessons (1).svg"/>
                     <p>With Trove University, you have access to a wealth of knowledge and resources designed to guide you on your financial journey. Whether you're just starting out or looking to deepen your understanding 
                     of the financial markets, Trove University is here to support you every step of the way.</p>
              </div>

       </div>
     
     </div>
     <!-- end of 2nd section -->

      <!-- whats u learn section 3rd -->
      <div class="third-section">
       <h2>What You'll Learn</h2>
       <div class="inner">
              <div class="two-col">
              <ul>
               <li>Investing Basics</li>
              <li>Advanced Strategies</li>
              <li>Comprehensive Financial Education</li>
              <li>Financial Literacy for All Ages</li>
              </ul>
       </div>
   
       <div class="two-col main-content">
              <div class="inner1">
                     <img  class='innerimage' src="../assets/dccl--frontend-simple-coffee-listing/currency-exchange-1.svg"/>
                     
                     <ul>
                            <h3>Investing Basics</h3>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>What is a Stock? Understand the fundamentals of stock ownership and the role of the stock market.</li>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Stock Prices Learn how stock prices are determined and what factors influence them.</li>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Diversification: Discover the importance of spreading your investments to manage risk.</li>
                           
                     </ul>
              </div>
              <div  class="inner1">
                     <img  class='innerimage' src="../assets/dccl--frontend-simple-coffee-listing/profit-calculation.svg"/>
                    
                     <ul>
                            <h3>Advanced Strategies</h3>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Investing Strategies Explore various strategies to maximize your investment returns.</li>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Picking Stocks Gain skills in selecting stocks that fit your investment goals.</li>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Reading Stocks Learn how to analyze stock performance and make informed decisions.</li>
                           
                     </ul>
              </div>

              <div  class="inner1">
                     <img  class='innerimage' src="../assets/dccl--frontend-simple-coffee-listing/problem-solution-1.svg"/>
                   
                     <ul>
                            <h3>Comprehensive Financial Education</h3>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Investing Strategies Explore various strategies to maximize your investment returns.</li>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Picking Stocks Gain skills in selecting stocks that fit your investment goals.</li>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Reading Stocks Learn how to analyze stock performance and make informed decisions.</li>
                           
                     </ul>
              </div>
              <div  class="inner1">
                     <img  class='innerimage' src="../assets/dccl--frontend-simple-coffee-listing/partnership-agreement.svg"/>
                     
                     <ul>
                            <h3>Comprehensive Financial Education</h3>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Investing Strategies Explore various strategies to maximize your investment returns.</li>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Picking Stocks Gain skills in selecting stocks that fit your investment goals.</li>
                            <li><img src='../assets/dccl--frontend-simple-coffee-listing/check.svg'/>Reading Stocks Learn how to analyze stock performance and make informed decisions.</li>
                           
                     </ul>
              </div>
       </div>
</div>
      
      
</div>
     <!-- earn as u learn -->
     <div class="earn-section">
         <div class="content">
              <div class="firstCol">
                     <h2>Earn as You Learn: Unlocking Rewards</h2>
                     <p>At Trove University, we believe that learning should be rewarding in more ways than one. As you progress through our educational content, 
                      you’ll earn points that can be redeemed for a variety of rewards.</p>
               </div>
               <div class="firstCol" >
                     <img src="../assets/dccl--frontend-simple-coffee-listing/jewel-contribution.svg" alt=""/>
               </div>
         </div>
               
     </div>
      <!--END OF earn as u learn -->

     <!-- START OF HOW IT WORKS CAROUSEL -->
     <div class="caro-wrapper">
       <div class="width-wrapper">
       <section id="section1">
              <a href="#section3" class="arrow_btn"> ‹ </a>
              <div>
              <h3 class="num">1</h3>
              <h2>Complete Lessons</h2>
              <p>With Trove University, every lesson you complete not only increases</p>
              </div>

              <div>
                     <img src="../assets/dccl--frontend-simple-coffee-listing/image-122.png" alt=""/>
              </div>
              <a href="#section2" class="arrow_btn"> › </a>
       </section>

       <section id="section2">
              <a href="#section1" class="arrow_btn"> ‹ </a>
              <div>
                     
              <h3 class="num">2</h3>
             
              <h2>redeemed point</h2>
              <p>With Trove University, every lesson you complete not only increases</p>
              </div>
              <div>
                     <img src="../assets/dccl--frontend-simple-coffee-listing/img2.png" alt=""/>
              </div>
              <a href="#section3" class="arrow_btn"> ›</a>
              
       </section>
       <section id="section3">
              <a href="#section2" class="arrow_btn"> ‹ </a>
              <div>    
              <h3 class="num">3</h3>
              <h2>Build your portfolio</h2>
              <p>With Trove University, every lesson you complete not only increases</p>
              </div>
              <div>
                     <img src="../assets/dccl--frontend-simple-coffee-listing/image-122.png" alt=""/>
              </div>
              <a href="#section1" class="arrow_btn"> › </a>
       </section>
</div>
<div class="slider-nav">
              <a href="#section1" class="navBtn" >hi</a>
              <a href="#section2" class="navBtn">hi</a>
              <a href="#section3" class="navBtn">hi</a>
       
       </div>
     
     </div>

     <!-- START OF 3 SECTIONS -->

     <div class="works-sectn">
        <h3>How it works</h3>
        <div class="flex-col">
              <div>
                     <h4>1</h4>
                     <h2>Complete Lessons:</h2>
                     
                     <p>Earn points for every lesson and quiz you complete.</p>
              </div>      
                    
              <div>  
                     <img src="../assets/dccl--frontend-simple-coffee-listing/img1.png"/>    
              </div>
          
        </div>
        <hr>
       
       <!-- START OF 2ND ROW -->
        <div class="flex-col">
              <div>
                     <h4>2</h4>
                     <h2>Redeem Points:</h2>
                     
                     <p>Exchange your points for cash, airtime, trading fees, data, and more.</p>
              </div>      
                    
              <div>  
                     <img src="../assets/dccl--frontend-simple-coffee-listing/redeem-1.png"/>    
              </div>
          
        </div>
        <hr>
         <!-- END OF 2ND ROW -->

          <!-- START OF 3RD ROW -->

        <div class="flex-col">
              <div>
                     <h4>3</h4>
                     <h2>Build Your Portfolio:</h2>
                     
                     <p>Use your rewards to support your investment activities, turning your educational journey into a profitable experience.</p>
              </div>      
                    
              <div>  
                     <img src="../assets/dccl--frontend-simple-coffee-listing/portfolio.png"/>    
              </div>
          
        </div>
      
     </div>
    
      <!-- END OF HOW IT WORKS CAROUSEL -->
     <!-- START OF BENEFITS -->
     <section class="benefit-wrapper">
       <h3>Benefits of Learning with Trove University</h3>
       <p>With Trove University, every lesson you complete not only increases your financial literacy but also adds tangible benefits to your investment journey.</p>
       <div class="icon-wrapper">
       <div>
              <img src="../assets/dccl--frontend-simple-coffee-listing/icon1.png" alt="">
              <h2>Flexible Rewards:</h2>
              <p>Redeem points fom a variety of rewards including cash, airtime, trading fee credits, and data.</p>
       </div>
       <div>
              <img src="../assets/dccl--frontend-simple-coffee-listing/icon2.png" alt="">
              <h2>Achieve Milestones:</h2>
              <p>Hit learning milestones and unlock additional rewards, helping you stay motivated and engaged.</p>
       </div>
       <div>
              <img src="../assets/dccl--frontend-simple-coffee-listing/icon3.png" alt="">
              <h2>Real-World Application:</h2>
              <p>Apply your knowledge directly to your investment strategy, turning theory into practice.</p>
       </div>
</div>
     </section>
         <!-- END OF BENEFITS -->
     <!-- START OF HOW IT WORKS -->
     <section class="hoWork">
       <h3>How it works</h3>
       <div class="work-wrapper">
              <div>
                <img src="../assets/dccl--frontend-simple-coffee-listing/icon1.png" alt="">
                <h2>Download Trove</h2>
                <p>and create your account.</p>
              </div>

              <div>
                <img src="../assets/dccl--frontend-simple-coffee-listing/icon1.png" alt="">
                <h2>Access Trove University</h2>
                <p>through the app and start your learning journey.</p>
              </div>

              <div>
                <img src="../assets/dccl--frontend-simple-coffee-listing/icon1.png" alt="">
                <h2>Earn Points</h2>
                <p>as you progress through the lessons.</p>
              </div>

              <div>
                <img src="../assets/dccl--frontend-simple-coffee-listing/icon1.png" alt="">
                <h2>Redeem Your Points</h2>
                <p>as you progress through the lessons.</p>
              </div>

              <div>
                <img src="../assets/dccl--frontend-simple-coffee-listing/icon1.png" alt="">
                <h2>Start Investing</h2>
                <p>as you progress through the lessons.</p>
              </div>
       </div>
     </section>
  <!-- END OF HOW IT WORKS -->
   <!-- START OF LAST SECTION -->
   <section class="community-section">
       <div class="com-wrapper">
      
              <h3>Join The Trove Community</h3>
              <P>Join over 400,000 investors who are learning and growing with Trove University. Whether you’re just starting out or looking to deepen your financial knowledge, Trove University offers the tools and resources you need to succeed
               </P>
     <img src="../assets/dccl--frontend-simple-coffee-listing/image.png" alt="">
       </div>

     
   </section>
      <!-- END OF LAST SECTION -->
</div>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
definePageMeta({
        layout : false,
});

// Track the active section for applying the active class
const activeSection = ref(null);

const updateActiveHeading = () => {
  const section1 = document.getElementById('section1').offsetTop;
  const section2 = document.getElementById('section2').offsetTop;
  const scrollPosition = window.scrollY + 100; // Buffer for smoothness

  if (scrollPosition >= section1 && scrollPosition < section2) {
    activeSection.value = 'section1';
  } else if (scrollPosition >= section2) {
    activeSection.value = 'section2';
  }
};

// Add scroll event listener on mount and remove on unmount
onMounted(() => {
  window.addEventListener('scroll', updateActiveHeading);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveHeading);
});
</script>
<style scoped>
html{
       scroll-behavior: smooth;
}

.herowrapper{
       background: #091438;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       color:#ffffff;
       padding-top:200px;
}
.herowrapper .orangeBg {
       background: #EA8D51;
       font-size: 18px;
       line-height: 21px;
       border-radius: 60px;
       padding: 10px;
}
.herowrapper h1{
       font-size: 86px;
       line-height: 90px;
       width:700px;
       max-width: 700px;
       text-align: center;
}
.para{
       text-align: center;
       width:600px;
       max-width: 600px;
}
.herowrapper img{
       width:500px;
       max-width: 500px;
}
.second-wrapper{
       background:#00030B;
       color:#ffffff;
       display:flex;
       justify-content: space-evenly;
       padding:100px;
     
}
.second-wrapper h2{
       font-size: 51px;
       line-height: 60px;
       padding-bottom: 40px;
}
.border-side{
       width:600px;
}
.border-side div{
       border:1px solid rgba(128, 128, 128, 0.445);
       border-radius: 15px;
       padding:50px;
       margin-bottom: 45px;
    
}
.border-side img{
       padding-bottom: 30px;
}
.border-side p{
       font-size:18px;
       line-height: 21px;
}
.second-wrapper h4{
       cursor:pointer;
       font-size: 22px;
}
.activeBtn{
       width:260px;
       background:#B5D8F3 ;
       border-radius: 50px;
       padding:18px;
       color:#262626;
       margin-bottom: 50px;
  
}
.third-section{
       background:#00030B;
       color:#ffffff;
       padding:100px 0px;
}
.third-section h2{
       text-align: center;
       font-size: 51px;
       line-height: 60px;

}
.third-section .inner{
      width: 100%;
      max-width: 1140px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      
}
.third-section ul{
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    transition: 0.3s;
}
.main-content{
    width:70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: 2.5rem;
    box-sizing: border-box;
    opacity: 1;
   
}
.main-content .inner1{
       background: #050C24;
       border-radius: 20px;
       width: 100%;
       padding: 1.5rem;
       display: flex;
       align-content: center;
     
       gap:3rem;
}
.inner1 ul {
       gap:20px;
       font-size: 16px;
       line-height: 24px;
   
}
.innerimage{
       width:250px;
}
.inner1 img{
       margin-right: 10px;
}
.inner1 h3{
       font-size:24px;
}
/* 
start of earn section */
.earn-section {
       background-image: url(../assets/dccl--frontend-simple-coffee-listing/backgroundtrove.jpg);
       background-size: cover;   

}
.earn-section .content{
       display: flex;
       justify-content: space-between;
       color:#ffffff;
       gap: 2.5rem;
       padding: 1.5rem 3rem;
       box-sizing: border-box;
       width: 100%;
}
div.content {
       width:100%;
       max-width: 1140px;
       margin: 0 auto;
       box-sizing: border-box;
}
.content img{
       width:600px;
}
.firstCol{
       flex:1;
     width:50%;
     display:flex;
     flex-direction: column;
     justify-content: center;
}
.firstCol h2{
       font-size:50px;
       line-height: 60px;
       width:500px;
       max-width: 500px;
       padding-bottom: 20px;
}
.firstCol p{
       font-size: 18px;
       line-height: 21px;
       width:500px;
}
.caro-wrapper{
       background: #091438;
       color:#ffffff;
       padding:150px 0px;
       display:none;
      
}
.width-wrapper{
 
       display:grid;
       grid-template-columns: repeat(3,100%);
       overflow: hidden;
       scroll-behavior: smooth;
       /* width:100%;
       max-width:1140px;
       margin:0 auto; */
    
}
.width-wrapper{
         width:100%;
       max-width:1140px;
       margin:0 auto;
}
 .width-wrapper section{
       
       position: relative;
       display: grid;
       grid-template-columns: repeat(2, auto);
       gap:10px;
       
}
.caro-wrapper section a{
       position: absolute;
       text-decoration: none;
       font-size: 3rem;
       width: 80px;
       padding: 20px;
       color:#ffffff;
       text-align: center;
       z-index: 1;
       
}
.caro-wrapper section a:nth-of-type(1){
       top:50%;
       bottom:0;
       left:0;
     

     
}
.caro-wrapper section a:nth-of-type(2){
       top:50%;
       right:0;
       bottom:0;
}
.caro-wrapper section div:first-of-type{
       display: flex;
       flex-direction: column;
       justify-content: center;
       gap:20px;
}
.caro-wrapper section h2{
       font-size:30px;
       text-transform: capitalize;
}
.num{
       background: #112557;
       border-radius: 100%;
       width:3rem;
       padding:10px;
       font-size: 20px;
       text-align: center;
}
.slider-nav{
       text-align:center;
       margin-top:30px;
}

.slider-nav .navBtn{
       width:0.6rem;
       height:0. 6rem;
       /* border-radius: 50%; */
   
       background: #fff;
       color:transparent;
       margin-right:20px;
       transition: ease 250ms;
     
}

.works-sectn{
       background:#091438;
       color:#ffffff;
       padding:150px 0px;
}
.works-sectn h3{
       font-size:50px;
       line-height: 60px;
       text-align:center;
}

.flex-col{
       width: 100%;
       max-width: 1140px;
       margin:0 auto;
       display:flex;
       justify-content:space-between;
       gap:0px;
       align-items: center;
       padding:80px 0px;
}

.flex-col img{
  width:500px;
}
.flex-col h4{
       font-size:18px;
       background:#112557;
       width:20px;
       padding:20px 30px;
       border-radius:50%;
       text-align: left;
}
.flex-col h2{
       font-size:40px;
       line-height: 50px;
       
}
.flex-col p{
       font-size:18px;
       width:320px;
       max-width:320px;
}
hr{
       width:80%;
       max-width:80%;
       margin:0 auto;
       height:1px;
       border:none;
       background-color:rgba(128, 128, 128, 0.88);
}
.benefit-wrapper{
       background: #091438;
       padding:50px 0px 100px 0px;
       
}
.benefit-wrapper h3{
       color:#ffffff;
       text-align: center;
       font-size:50px;
       padding-bottom: 20px;
       line-height: 60px;
       width:550px;
       max-width: 550px;
       margin: 0 auto;
}
.benefit-wrapper p{
       font-size: 16px;
       color:#ffffff;
       text-align: center;
       width:550px;
       max-width: 550px;
       margin: 0 auto;
}
.icon-wrapper{
       display: flex;
       justify-content: center;
       gap:20px;
       width:100%;
       max-width: 1140px;
       margin:0 auto;
       padding-top:50px;
       text-align: center;
       color:#ffffff;
}
.icon-wrapper img{
 width:70px;
 padding-bottom: 15px;
}
.icon-wrapper p{
       width:300px;
       padding-top: 15px;
}
.hoWork{
       background:#091438;
       color:#ffffff;
       padding-bottom: 100px;
       
}
.hoWork h3{
       text-align: center;
       font-size:50px;
       margin:0px;
       padding: 60px 0px;
}
.work-wrapper{
       width:100%;
       max-width: 1140px;
       margin:0 auto;
       display: grid;
       grid-template-columns: repeat(3, 30%);
       grid-gap: 65px;
       justify-items: center;

    
}
.work-wrapper div{
       background: #122557;
       padding:20px 20px 50px 20px;
       margin:0px;
       border-radius: 20px;
       width:350px; 
       max-width:350px;
       display: flex;
       flex-direction: column;
       gap:10px;
      
}
.work-wrapper img{
       width:50px;
}
.community-section{
       background: #00030B;
       color:#ffffff;
       position: relative;
       overflow: hidden;
}
.com-wrapper{
       width:100%;
       max-width: 1140px;
       margin:0 auto;
       padding: 100px 0px;
       text-align: center;
}
.com-wrapper h3{
       font-size:50px;
}
.com-wrapper p{
       width:650px;
       max-width: 650px;
       padding-top:20px;
       margin:0 auto;
}
.com-wrapper img{
       position: absolute;
       width:200px;
       right:0;
       bottom: 0;
       
}
/* START OF RESPONSIVENESS */
@media screen and (max-width : 768px) {
       .herowrapper h1{
              font-size:70px;
              line-height: 75px;
              padding:20px 0px;

       }
       .second-wrapper{
              padding:80px 20px;
       }
       .second-wrapper h2 {
       font-size: 40px;
       line-height: 45px;
}
.third-section h2 {
    font-size: 40px;
}
.main-content .inner1 {
flex-direction: column;
}
.main-content    q.inner1 img{
       width:20rem;
}


.firstCol h2{
       font-size:40px;
       line-height:45px;
       width:400px;
       max-width: 400px;
}
.firstCol p {
       width:300px;
       max-width: 300px;
}
.content img {
    width: 350px;
}
.caro-wrapper{
       padding:150px 50px;
       overflow: hidden;
}

.width-wrapper img{
       width:250px;
}
.num{
       width:2rem;
}
.work-wrapper{
       grid-template-columns: repeat(2, 45%);
       grid-gap: 30px;
       justify-content: center;
       justify-items: ;
}
.work-wrapper div{
       width:280px;
       gap:0px;
}

.hoWork h3{
    margin:0;
}
.wrap p{
       width:600px;
}

}
</style>