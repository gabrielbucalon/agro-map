let apiAddress: any;

/**
* Production
* Apenas um exemplo, mudar ip e o scoket
*/
apiAddress = {
	api: "http://192.168.4.253:8080/api",
	socket: "endereço_que_for_para_produção"
};

/**
* Development
*/
if (window.location.hostname == "localhost") {
	apiAddress = {
		api: "http://localhost:3001/api",
		socket: "http://localhost:65080"
	};
}

/**
* Export
*/
export const API = apiAddress.api;
export const MICRO = apiAddress.micro;
export const AUTH = apiAddress.auth;
export const SOCKET = apiAddress.socket;
