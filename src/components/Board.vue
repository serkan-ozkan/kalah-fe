<template>
<div class="board">
  <div class="section endsection">
      <div class="pot" id="mb">{{board[13]}}</div> 
  </div>
  <div class="section midsection">
    <div class="midrow topmid">
      <div class="pot" id="pt1"><button @click="play(0)">{{board[0]}}</button></div>
      <div class="pot" id="pt2"><button @click="play(1)">{{board[1]}}</button></div>
      <div class="pot" id="pt3"><button @click="play(2)">{{board[2]}}</button></div>
      <div class="pot" id="pt4"><button @click="play(3)">{{board[3]}}</button></div>
      <div class="pot" id="pt5"><button @click="play(4)">{{board[4]}}</button></div>
      <div class="pot" id="pt6"><button @click="play(5)">{{board[5]}}</button></div>
    </div>
    <div class="midrow botmid">
      <div class="pot" id="pb6"><button @click="play(12)">{{board[12]}}</button></div>
      <div class="pot" id="pb5"><button @click="play(11)">{{board[11]}}</button></div>
      <div class="pot" id="pb4"><button @click="play(10)">{{board[10]}}</button></div>
      <div class="pot" id="pb3"><button @click="play(9)">{{board[9]}}</button></div>
      <div class="pot" id="pb2"><button @click="play(8)">{{board[8]}}</button></div>
      <div class="pot" id="pb1"><button @click="play(7)">{{board[7]}}</button></div>
    </div>
  </div>
  <div class="section endsection">
      <div class="pot" id="mt">{{board[6]}}</div>        
  </div>
</div>
</template>

<script>
import GameService from '../services/GameService'

    export default {
        name: 'Game-Board',
        data(){
            return{
             board : []
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
                    this.board = response.data.currentBoard
                });
            }
        },
        created(){
            this.getBoard()
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
  height:200px;
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

.bead
{
  position:absolute;
	border-radius: 50%;
	width: 25px;
	height: 25px;
}

button {
  position:relative;
  background-color:rgba(255, 255, 255, 0.08);
  flex-grow:1;
  margin:5px;
  border-radius:50px;
 
}


</style>