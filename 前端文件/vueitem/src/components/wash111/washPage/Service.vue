<template>
  <div id="service">
      <div v-html="pppppp"></div>
  </div>
</template>
<script>
export default {
  data(){
      return{
        pppppp : ''
      }
  },
  created(){

    if(this.$store.state.saverId === undefined){
      this.$store.state.saverId = "004001"
    }else{
      this.$store.state.saverId
    }
    let urL=this.$common.apidomain+"/articleinfo/findinfobyflabel?id="+this.$store.state.saverId;
       console.log(urL)
      this.$http.get(urL).then(res=>{
        if(res.data.code==="0000"){
        this.pppppp = res.data.result.content;
        }else{
          this.$Toast(res.data.error);
        }
      })
  }
}
</script>
<style scoped lang="less">
 #service{
   width: 750/50rem;
   position: absolute;
   left: 0;
   right: 0;
   top:163/50rem;
   background: #FFFFFF;
   bottom: 126/50rem;
   overflow-x: hidden;
   overflow-y: auto;
  div{
    width: 100%;
  }
 }
</style>
