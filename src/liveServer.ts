import http from "http";
import fs from "fs";
import path from "path";
export default class LiveServer{
	public start(webName:String):void{
		http.createServer((req, res)=>{
			fs.readFile(path.join( `D:\\ШУТИС-ПХ\\2-р курс\\2-р сем\\FCS311 Бүтээлт\\BiyDaalt4\\dist\\projects\\${webName}.html`),{encoding:"utf-8",flag:"r"},(err,data)=>{
				res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
			})
		}).listen(8080,()=>console.log("Server started listen 8080 port"));
	}
}