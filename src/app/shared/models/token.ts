export class Token{
    public type!: string;
    public value!: string;
    public expiry!: number;



}

export class DecodeToken{
    public token!: Token;
    public GetProperty(properName: string){
        if(this.token.value != null){
            var payload = this.token.value.split('.')[1];
            var tokenobj = JSON.parse(atob(payload));
            
            if(properName in tokenobj){
                return tokenobj[properName];
            }
        }
        return null;
    }
}
