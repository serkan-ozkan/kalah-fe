import axios from "axios";

const GAME_API_BASE_URL = 'http://localhost:8080/api/'

class GameService{
    getBoard(){
        return axios.get(GAME_API_BASE_URL);
    }

    play(index, board){
        return axios.put(GAME_API_BASE_URL + 'play', {pitIndex : index, currentBoard: board});
    }

}

export default new GameService()