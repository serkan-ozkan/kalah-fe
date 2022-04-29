<template>
<h1> {{board.gamestatus}}</h1>
<div class="board">
  <div class="section endsection">
      <div class="pot" id="mb">{{board.stoneAmounts[13]}}</div> 
  </div>
  <div class="section midsection">
    <div class="midrow topmid">
      <div class="pot" id="pt1"><button @click="play(12)">{{board.stoneAmounts[12]}}</button></div>
      <div class="pot" id="pt2"><button @click="play(11)">{{board.stoneAmounts[11]}}</button></div>
      <div class="pot" id="pt3"><button @click="play(10)">{{board.stoneAmounts[10]}}</button></div>
      <div class="pot" id="pt4"><button @click="play(9)">{{board.stoneAmounts[9]}}</button></div>
      <div class="pot" id="pt5"><button @click="play(8)">{{board.stoneAmounts[8]}}</button></div>
      <div class="pot" id="pt6"><button @click="play(7)">{{board.stoneAmounts[7]}}</button></div>
    </div>
    <div class="midrow botmid">
      <div class="pot" id="pb6"><button @click="play(0)">{{board.stoneAmounts[0]}}</button></div>
      <div class="pot" id="pb5"><button @click="play(1)">{{board.stoneAmounts[1]}}</button></div>
      <div class="pot" id="pb4"><button @click="play(2)">{{board.stoneAmounts[2]}}</button></div>
      <div class="pot" id="pb3"><button @click="play(3)">{{board.stoneAmounts[3]}}</button></div>
      <div class="pot" id="pb2"><button @click="play(4)">{{board.stoneAmounts[4]}}</button></div>
      <div class="pot" id="pb1"><button @click="play(5)">{{board.stoneAmounts[5]}}</button></div>
    </div>
  </div>
  <div class="section endsection">
      <div class="pot" id="mt">{{board.stoneAmounts[6]}}</div>        
  </div>
</div>
</template>

<script>
import GameService from '../services/GameService'

    export default {
        name: 'Game-Board',
        data(){
            return{
             board : null
            }
           
        },
        methods: {
            getBoard(){
                GameService.getBoard().then((response) =>{
                    this.board = response.data
                });
            },
            play(index){
                GameService.play(index, this.board).then((response) => {
                    this.board = response.data
                });
            },
        },
        created(){
            this.getBoard()
        },
        computed:{
            isDisabled: function(i){
            return this.board.stoneAmounts[i] > 0 ? false : true;
    }
  }
    }
    


</script>

<style scoped>
html, body
{
  margin:5px;
}

.board
{
  display:flex;
  background-color:SaddleBrown;
  height:250px;
  width:800px;
  border-radius:50px;
  padding:30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid #FFFF00;
  padding: 10px;
}

.section
{
  background-color:rgba(255, 255, 255, 0.03);
  margin:5px;
}

.endsection
{
  display:flex;
  flex-grow:1;
}

.midsection
{
  display:flex;
  flex-direction:column;
  flex-grow:6;
}

.midrow
{
  display:flex;
  flex-grow:1;
}

.pot
{
  position:relative;
  background-color:rgba(255, 255, 255, 0.08);
  flex-grow:1;
  margin:5px;
  border-radius:50px;
  font-size: 300%;
}


button {
  position:relative;
  background-color:rgba(255, 255, 255, 0.08);
  flex-grow:1;
  margin:5px;
  border-radius:50px;
 
}

#pb1,#pb2,#pb3,#pb4,#pb5,#pb6 {
background-color:rgba(189, 16, 16, 0.973);
}

#pt1,#pt2,#pt3,#pt4,#pt5,#pt6 {
background-color:rgb(47, 0, 255);
}


</style>