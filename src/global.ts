
const main_endpoint = "tcc-logistica";

function url(url:string):string {
	return `url(/${main_endpoint}/${url})`;
}

export {url, main_endpoint};
