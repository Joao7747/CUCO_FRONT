export class Token{
    public type!: string;
    public value!: string;
    public expiry!: number;



}

export class DecodeToken{
    public GetProperty(properName: string){
            var token = localStorage.getItem("token");
            if(token){
                var payload = token!.split('.')[1];
                var tokenobj = JSON.parse(atob(payload));
                if(properName in tokenobj){
                    return tokenobj[properName];
                }
            }
        return null;
    }
}
