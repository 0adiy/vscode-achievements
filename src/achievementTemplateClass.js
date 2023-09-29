const vscode = require("vscode");
class AchievementBuilder {
    constructor(name,event,msg) {
            this.name= name
            this.event= event
            this.msg=msg;
    }
     notify (){
        // Your code to execute when debugging starts
        vscode.window.showInformationMessage(this.msg);
    }
     run (){
        // Your code to execute when debugging starts
    }

}


const x= new AchievementBuilder("firstTimeDebuggerUse", vscode.debug.onDidStartDebugSession, "First Dive into Debugging!");
x.run = ()=>{
    x.notify();
}