import config from './config';

class WebSocketService{
	static instance = null;
	callbacks = {};

	static getInstance(){
        if (!WebSocketService.instance){
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    constructor(){
        this.socketRef = null;
    }

    connect(game_id){
        const path = config.API_PATH + '/' + game_id;

        this.socketRef = new WebSocket(path);
        
        this.socketRef.onmessage = e => {
        	console.log('Received')
            this.socketNewMessage(e.data);
          };

        this.socketRef.onopen = () => {
            console.log("WebSocket open");
        };
        
        this.socketRef.onerror = e => {
            console.log(e.message);
        };

        this.socketRef.onclose = () => {
            console.log("WebSocket closed, restarting..");
            this.connect();
        };   
    }

    socketNewMessage(data){
        const parsedData = JSON.parse(data);
        const command = parsedData.command;
        console.log('hey')
        if(Object.keys(this.callbacks).length === 0){
            return;
        }
        if(command === 'game'){
            console.log('game received');
            this.callbacks[command](parsedData);
        }
        else if(command === 'chat'){
            console.log("okay so this was called")
            this.callbacks[command](parsedData);
        }
    }

    initUser(game_id,budget,grid_size,user_id){
        console.log(user_id)
    	this.sendMessage({command : 'init', game_id : game_id, budget: budget, grid_size: grid_size, user_id: user_id})
    }

    reset(game_id,board){
    	this.sendMessage({command: 'reset', game_id: game_id, board: board})
    }

    blockClick(game_id,i,j,board){
    	this.sendMessage({command: 'block_click', game_id: game_id, i:i, j:j,board: board})
    }

    directionClick(game_id,direction,pipe_size,board){
    	this.sendMessage({command: 'direction_click', game_id: game_id, direction:direction, pipe_size: pipe_size, board: board })
    }
    changeSize(game_id,i,j,pipe_size,board){
        this.sendMessage({command: 'change_size', game_id: game_id, i:i, j:j, pipe_size:pipe_size, board: board})
    }
    deletePipe(game_id,i,j,board){
        this.sendMessage({command: 'delete_pipe', game_id: game_id, i:i, j:j, board: board})
    }
    changePressure(game_id,initial_pressure,board){
        this.sendMessage({command: 'change_init_pressure', game_id: game_id, initial_pressure: initial_pressure, board:board})
    }
    pipe_click(game_id,i,j,board){
        this.sendMessage({command: 'pipe_click', game_id: game_id, i:i,j:j, board: board})
    }
    switch(game_id,board){
        this.sendMessage({command: 'switch', game_id: game_id, board: board})
    } 
    newChatMessage(game_id,user_id,message){
        this.sendMessage({command: 'new_message', game_id: game_id, user_id: user_id, message:message})
    }

    alert1(game_id, i, j){
        this.sendMessage({command: 'alert1', game_id: game_id , i:0,j:0})
    }
    alert2(game_id, i, j){
        this.sendMessage({command: 'alert2', game_id: game_id , i:0,j:0})
    }
    problemStatement1_completed(game_id, k, i, j){
        this.sendMessage({command: 'problemStatement1_completed',game_id:game_id, k:16,i:0,j:0})
    }
    alert_sub(game_id){
        this.sendMessage({command: 'alert_sub',game_id:game_id})
    }
    Finish(game_id){
        this.sendMessage({command: 'Finish', game_id:game_id})
    }
    MarketTrends(game_id){
        this.sendMessage({command: 'MarketTrends', game_id:game_id})
    }
    problemStatement1_hide(game_id){
        this.sendMessage({command: 'problemStatement1_hide', game_id:game_id})
    }
    problemStatement2_hide(game_id, cb) {
        console.log("====>", game_id);
        this.sendMessage({ command: 'problemStatement2_hide', game_id: game_id }, cb);
    }

    addCallbacks(gameCallback,chatCallback){
        this.callbacks['game'] = gameCallback;
        this.callbacks['chat'] = chatCallback;
    }

    sendMessage(data, cb){
        try{
            console.log('tried');
            console.log('data', JSON.stringify(data));
            this.socketRef.send(JSON.stringify({...data}))
            if (cb) cb();
        }
        catch(err){
            console.log(err.message);
        }
    }
     state(){
        return this.socketRef.readyState;
    }


    waitForSocketConnection(callback){
        const socket = this.socketRef;
        const recursion = this.waitForSocketConnection;
        setTimeout(
            function(){
                if(socket.readyState === 1){
                    console.log("Connection is made");
                    if(callback != null){
                        callback();
                    }
                    return;
                }
                else{
                    console.log("Wait for connection..");
                    recursion(callback);
                }
            }, 1);
    }

}

let WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;